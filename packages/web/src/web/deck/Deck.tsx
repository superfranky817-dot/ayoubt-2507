import { useCallback, useEffect, useState, type CSSProperties, type MouseEvent } from "react";
import { slides, type Photo, type Pose, type Slide } from "./slides";

const W = 1920;
const H = 1080;

const CHARACTER: Record<Pose, string> = {
  wave: "/character/boy_wave_cut.png",
  point: "/character/boy_point_cut.png",
  celebrate: "/character/boy_celebrate_cut.png",
};

function useStageScale() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / W, window.innerHeight / H));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  return scale;
}

function Presenter({ pose, className }: { pose: Pose; className: string }) {
  const [waving, setWaving] = useState(false);
  const onClick = (e: MouseEvent) => {
    e.stopPropagation();
    setWaving(true);
    setTimeout(() => setWaving(false), 1200);
  };
  return (
    <img
      src={CHARACTER[pose]}
      alt="Le présentateur"
      className={`presenter ${className} ${waving ? "is-waving" : ""}`}
      onClick={onClick}
      draggable={false}
    />
  );
}

function PhotoCard({
  photo,
  delay,
  onOpen,
  className = "",
}: {
  photo: Photo;
  delay: number;
  onOpen: (p: Photo) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`photo ${className}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
      onClick={(e) => {
        e.stopPropagation();
        onOpen(photo);
      }}
      aria-label={photo.alt}
    >
      <img src={photo.src} alt={photo.alt} draggable={false} />
    </button>
  );
}

function Gallery({ photos, onOpen }: { photos: Photo[]; onOpen: (p: Photo) => void }) {
  const n = photos.length;
  return (
    <div className={`gallery g-${n}`}>
      {photos.map((p, i) => (
        <PhotoCard key={p.src + i} photo={p} delay={250 + i * 140} onOpen={onOpen} className={`pc-${i}`} />
      ))}
    </div>
  );
}

function SlideView({ slide, onOpen }: { slide: Slide; onOpen: (p: Photo) => void }) {
  if (slide.kind === "cover") {
    return (
      <div className="layout cover">
        <div className="cover-text">
          <h1 className="display title anim" style={{ "--d": "250ms" } as CSSProperties}>
            {slide.title}
          </h1>
          <div className="rule anim" style={{ "--d": "500ms" } as CSSProperties} />
        </div>
        <PhotoCard
          photo={slide.photos[0]}
          delay={400}
          onOpen={onOpen}
          className="hero-photo"
        />
        <Presenter pose={slide.pose} className="boy-cover" />
      </div>
    );
  }

  if (slide.kind === "plan") {
    return (
      <div className="layout plan">
        <div className="left">
          <h2 className="display heading anim" style={{ "--d": "100ms" } as CSSProperties}>
            {slide.heading}
          </h2>
          <ol className="plan-list">
            {slide.items!.map((item, i) => (
              <li
                key={item}
                className="anim plan-item"
                style={{ "--d": `${300 + i * 140}ms` } as CSSProperties}
              >
                <span className="plan-bar" />
                <span className="plan-text">{item}</span>
              </li>
            ))}
          </ol>
        </div>
        <Gallery photos={slide.photos} onOpen={onOpen} />
        <Presenter pose={slide.pose} className="boy-side" />
      </div>
    );
  }

  if (slide.kind === "video") {
    return (
      <div className="layout video">
        <div className="left">
          <h2 className="display heading anim" style={{ "--d": "100ms" } as CSSProperties}>
            {slide.heading}
          </h2>
        </div>
        <div className="video-grid">
          {slide.videos!.map((v, i) => (
            <div
              key={v.youtubeId}
              className="video-card anim"
              style={{ "--d": `${300 + i * 200}ms` } as CSSProperties}
            >
              <iframe
                src={`https://www.youtube.com/embed/${v.youtubeId}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
        <Presenter pose={slide.pose} className="boy-side" />
      </div>
    );
  }

  if (slide.kind === "closing") {
    return (
      <div className="layout closing">
        <div className="closing-photo">
          <PhotoCard photo={slide.photos[0]} delay={100} onOpen={onOpen} />
        </div>
        <div className="closing-card anim" style={{ "--d": "300ms" } as CSSProperties}>
          <p className="display closing-text">{slide.paragraphs![0]}</p>
        </div>
        <Presenter pose={slide.pose} className="boy-center" />
      </div>
    );
  }

  return (
    <div className="layout section">
      <div className="left">
        <h2 className="display heading anim" style={{ "--d": "100ms" } as CSSProperties}>
          {slide.heading}
        </h2>
        <div className="paras">
          {slide.paragraphs!.map((p, i) => (
            <div
              key={i}
              className="para-card anim"
              style={{ "--d": `${300 + i * 220}ms` } as CSSProperties}
            >
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
      <Gallery photos={slide.photos} onOpen={onOpen} />
      <Presenter pose={slide.pose} className="boy-side" />
    </div>
  );
}

export function Deck() {
  const scale = useStageScale();
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState<Photo | null>(null);
  const total = slides.length;

  const next = useCallback(() => setIndex((i) => Math.min(i + 1, total - 1)), [total]);
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open) {
        if (e.key === "Escape") setOpen(null);
        return;
      }
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        next();
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") setIndex(0);
      else if (e.key === "End") setIndex(total - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, total, open]);

  const slide = slides[index];

  return (
    <div className="deck-root">
      <div
        className="stage"
        style={{ transform: `translate(-50%, -50%) scale(${scale})` }}
        onClick={(e) => {
          const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width;
          if (x > 0.5) next();
          else prev();
        }}
      >
        <div className={`theme theme-${slide.kind}`} key={index}>
          <SlideView slide={slide} onOpen={setOpen} />
        </div>

        <div className="dots" onClick={(e) => e.stopPropagation()}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Diapositive ${i + 1}`}
              className={`dot ${i === index ? "on" : ""} ${i < index ? "done" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <div className="progress">
          <span style={{ width: `${((index + 1) / total) * 100}%` }} />
        </div>
      </div>

      {open && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <img src={open.src} alt={open.alt} />
        </div>
      )}
    </div>
  );
}
