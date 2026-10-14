"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { PROFILE } from "@/lib/data";
import { prefersReducedMotion } from "@/lib/hooks";
import { scrollToTarget } from "@/lib/scroll";

const css = `
.hero{
  position:relative;
  min-height:100svh;
  overflow:clip;
  isolation:isolate;
  background:#f1efea;
}

.hero-ghost{
  position:absolute;
  left:50%;
  top:clamp(110px,22svh,260px);
  transform:translateX(-50%);
  z-index:1;
  margin:0;

  font-weight:800;
  letter-spacing:-.05em;
  line-height:.8;
  white-space:nowrap;
  font-size:clamp(84px,16.5vw,320px);

  color:transparent;
  -webkit-text-stroke:1.1px rgba(13,13,13,.12);

  user-select:none;
  pointer-events:none;
  animation:ghost-in 1.8s var(--ease) both .1s;
}

@keyframes ghost-in{
  from{
    opacity:0;
    letter-spacing:.02em
  }
  to{
    opacity:1;
    letter-spacing:-.05em
  }
}

.hero-stage{
  position:absolute;
  left:50%;
  bottom:0;
  z-index:0;
  height:min(96svh,1040px);
  aspect-ratio:9/16;
  transform:translateX(-50%);
  animation:stage-in 1.6s var(--ease) both;
}

@keyframes stage-in{
  from{
    opacity:0;
    transform:translate(-50%,28px)
  }
  to{
    opacity:1;
    transform:translate(-50%,0)
  }
}

.hero-video{
  display:block;
  width:100%;
  height:100%;
  object-fit:contain;
  object-position:center bottom;
  background:#f1efea;

  -webkit-mask-image:
    linear-gradient(
      90deg,
      transparent 0%,
      #000 7%,
      #000 93%,
      transparent 100%
    );

  mask-image:
    linear-gradient(
      90deg,
      transparent 0%,
      #000 7%,
      #000 93%,
      transparent 100%
    );
}

.hero-copy{
  position:absolute;
  left:var(--gutter);
  bottom:clamp(40px,10svh,120px);
  z-index:2;
  max-width:min(36vw,520px)
}

.hero-kicker{
  font:500 12px/1.4 var(--font-mono);
  text-transform:uppercase;
  letter-spacing:.02em;
  color:var(--mute);
  margin:0 0 18px
}

.hero-kicker b{
  color:var(--ink);
  font-weight:500
}

.h1{
  margin:0;
  font-weight:700;
  letter-spacing:-.045em;
  line-height:.95;
  font-size:clamp(48px,6.2vw,108px)
}

.hero-line{
  display:block;
  overflow:hidden;
  padding-bottom:.06em;
  margin-bottom:-.06em
}

.hero-line>span{
  display:block;
  animation:line-up 1.2s var(--ease) both;
  animation-delay:calc(.25s + var(--i) * .1s)
}

@keyframes line-up{
  from{
    transform:translateY(105%)
  }
  to{
    transform:none
  }
}

.hero-roles{
  margin:20px 0 0;
  color:var(--ink-2);
  font-size:15px;
  line-height:1.5;
  max-width:34ch
}

.hero-ctas{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-top:26px
}

.hero-fade{
  animation:fade-up 1.2s var(--ease) both;
  animation-delay:calc(.5s + var(--i) * .08s)
}

@keyframes fade-up{
  from{
    opacity:0;
    transform:translateY(16px)
  }
  to{
    opacity:1;
    transform:none
  }
}

.hero-side{
  position:absolute;
  right:var(--gutter);
  bottom:clamp(40px,10svh,120px);
  z-index:2;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:18px;
  text-align:right
}

.hero-side p,
.hero-scroll span{
  margin:0;
  font:500 12px/1.5 var(--font-mono);
  text-transform:uppercase;
  color:var(--mute)
}

.snd{
  position:relative;
  width:46px;
  height:46px;
  border-radius:50%;
  background:var(--ink);
  color:#fff;
  display:grid;
  place-items:center;
  transition:
    transform .5s var(--ease),
    box-shadow .5s var(--ease)
}

.snd:hover{
  transform:translateY(-2px) scale(1.04);
  box-shadow:0 14px 30px -12px rgba(13,13,13,.55)
}

.snd svg{
  display:block
}

.snd-ping{
  position:absolute;
  inset:0;
  border-radius:50%;
  box-shadow:0 0 0 1.5px var(--ink);
  animation:ping 1.8s var(--ease) infinite;
  pointer-events:none
}

@keyframes ping{
  0%{
    transform:scale(1);
    opacity:.55
  }
  100%{
    transform:scale(1.9);
    opacity:0
  }
}

.hero-scroll{
  display:inline-flex;
  align-items:center;
  gap:10px
}

.hero-scroll i{
  width:1px;
  height:34px;
  background:var(--line);
  position:relative;
  overflow:hidden
}

.hero-scroll i::after{
  content:"";
  position:absolute;
  left:0;
  top:-40%;
  width:1px;
  height:40%;
  background:var(--ink);
  animation:drip 2.2s var(--ease) infinite
}

@keyframes drip{
  to{
    top:100%
  }
}

@media (max-width:899px){
  .hero{
    display:flex;
    flex-direction:column;
    padding-top:var(--nav-h);
    min-height:auto
  }

  .hero-ghost{
    top:calc(var(--nav-h) + 6svh)
  }

  .hero-stage{
    position:relative;
    left:auto;
    bottom:auto;
    transform:none;
    height:62svh;
    max-height:640px;
    margin:0 auto;
    animation-name:stage-in-m
  }

  @keyframes stage-in-m{
    from{
      opacity:0;
      transform:translateY(24px)
    }
    to{
      opacity:1;
      transform:none
    }
  }

  .hero-copy{
    position:relative;
    left:auto;
    bottom:auto;
    max-width:none;
    padding:28px var(--gutter) 56px
  }

  .hero-side{
    position:absolute;
    right:var(--gutter);
    top:calc(var(--nav-h) + 62svh - 64px);
    bottom:auto
  }

  .hero-side p,
  .hero-scroll{
    display:none
  }
}

@media (min-width:900px) and (max-width:1180px){
  .hero-copy{
    max-width:40vw
  }

  .h1{
    font-size:clamp(44px,5.6vw,72px)
  }
}
`;

type SoundState = {
  on: boolean;
  blocked: boolean;
};

export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  const [sound, setSound] = useState<SoundState>({
    on: false,
    blocked: false,
  });

  const [isPlaying, setIsPlaying] = useState(false);

  /*
   * Remembers whether the visitor wants the video playing.
   * This prevents scrolling away and back from restarting
   * a video that the visitor manually paused.
   */
  const wantsPlayback = useRef(true);
  const visible = useRef(true);

  const play = useCallback(async (withSound: boolean) => {
    const v = video.current;

    if (!v) {
      return false;
    }

    v.muted = !withSound;

    try {
      await v.play();
      return true;
    } catch {
      return false;
    }
  }, []);

  /*
   * Keep React state synchronized with the actual video.
   */
  useEffect(() => {
    const v = video.current;

    if (!v) {
      return;
    }

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  /*
   * Autoplay:
   * 1. Try with sound.
   * 2. If the browser blocks it, fall back to muted autoplay.
   * 3. Enable sound after the visitor's first interaction.
   */
  useEffect(() => {
    const v = video.current;

    if (!v) {
      return;
    }

    const btn = section.current?.querySelector(".snd");
    let unlocked = false;

    const unlock = (e: Event) => {
      if (unlocked) {
        return;
      }

      if (btn && e.target instanceof Node && btn.contains(e.target)) {
        return;
      }

      unlocked = true;
      detach();

      if (!wantsPlayback.current || !visible.current) {
        return;
      }

      play(true).then((ok) => {
        setSound({
          on: ok,
          blocked: !ok,
        });
      });
    };

    const events = ["pointerdown", "keydown", "touchend"] as const;

    const attach = () =>
      events.forEach((eventName) =>
        window.addEventListener(eventName, unlock, {
          capture: true,
          passive: true,
        }),
      );

    const detach = () =>
      events.forEach((eventName) =>
        window.removeEventListener(eventName, unlock, {
          capture: true,
        }),
      );

    if (prefersReducedMotion()) {
      wantsPlayback.current = false;
      v.pause();
      return;
    }

    (async () => {
      /*
       * First try autoplay with audio.
       */
      if (await play(true)) {
        setSound({
          on: true,
          blocked: false,
        });
        return;
      }

      /*
       * Browsers commonly block autoplay with audio.
       * In that case, start muted.
       */
      const mutedOk = await play(false);

      setSound({
        on: false,
        blocked: mutedOk,
      });

      if (mutedOk) {
        attach();
      }
    })();

    return detach;
  }, [play]);

  /*
   * Pause automatically when less than 35% of the hero
   * is visible.
   *
   * Resume only if the visitor did not manually pause it.
   */
  useEffect(() => {
    const el = section.current;
    const v = video.current;

    if (!el || !v) {
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.intersectionRatio >= 0.35;

        if (!visible.current) {
          v.pause();
          return;
        }

        if (!wantsPlayback.current) {
          return;
        }

        if (prefersReducedMotion()) {
          return;
        }

        play(sound.on).then((ok) => {
          if (!ok) {
            play(false);
          }
        });
      },
      {
        threshold: [0, 0.35, 0.6, 1],
      },
    );

    io.observe(el);

    const onVisibilityChange = () => {
      if (document.hidden) {
        v.pause();
        return;
      }

      if (visible.current && wantsPlayback.current && !prefersReducedMotion()) {
        play(sound.on).then((ok) => {
          if (!ok) {
            play(false);
          }
        });
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      io.disconnect();

      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [play, sound.on]);

  /*
   * Main Play / Pause button.
   *
   * PAUSE:
   * - freezes the image;
   * - pauses the audio;
   * - preserves the current playback position.
   *
   * PLAY:
   * - continues exactly where it was paused;
   * - attempts playback with audio.
   */
  const toggle = async () => {
    const v = video.current;

    if (!v) {
      return;
    }

    if (!v.paused) {
      wantsPlayback.current = false;

      /*
       * This pauses BOTH the image and the audio.
       */
      v.pause();

      setSound((current) => ({
        ...current,
        blocked: false,
      }));

      return;
    }

    wantsPlayback.current = true;

    /*
     * Since this happens after a direct button click,
     * browsers normally allow audio playback.
     */
    const withSound = await play(true);

    if (withSound) {
      setSound({
        on: true,
        blocked: false,
      });
      return;
    }

    /*
     * Fallback in case sound is still blocked.
     */
    const muted = await play(false);

    setSound({
      on: false,
      blocked: !muted,
    });
  };

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToTarget(id);
  };

  return (
    <section id="top" ref={section} className="hero" aria-labelledby="hero-title">
      <style>{css}</style>

      <p className="hero-ghost" aria-hidden="true">
        {PROFILE.firstName.toUpperCase()}
      </p>

      <div className="hero-stage">
        <video
          ref={video}
          className="hero-video"
          muted
          loop
          playsInline
          preload="auto"
          width={768}
          height={960}
          aria-label={`Video: ${PROFILE.name}'s spoken self-introduction`}
        >
          <source src="/hero/hero.webm" type="video/webm" />
        </video>
      </div>

      <div className="hero-copy">
        <p className="hero-kicker hero-fade" style={{ ["--i" as string]: 0 }}>
          <b>{PROFILE.name}</b> · {PROFILE.location}
        </p>

        <h1 id="hero-title" className="h1">
          <span className="hero-line">
            <span style={{ ["--i" as string]: 0 }}>
              {PROFILE.role.split(" ").slice(0, -1).join(" ")}
            </span>
          </span>

          <span className="hero-line">
            <span style={{ ["--i" as string]: 1 }}>
              <em>{PROFILE.role.split(" ").slice(-1)[0]}.</em>
            </span>
          </span>
        </h1>

        <p className="hero-roles hero-fade" style={{ ["--i" as string]: 1 }}>
          {PROFILE.roles.slice(1).join(" / ")}
        </p>

        <div className="hero-ctas">
          <a
            href="#work"
            className="btn btn-primary hero-fade"
            style={{ ["--i" as string]: 2 }}
            onClick={(e) => go(e, "#work")}
          >
            Explore work
          </a>

          <a
            href="#contact"
            className="btn btn-ghost hero-fade"
            style={{ ["--i" as string]: 3 }}
            onClick={(e) => go(e, "#contact")}
          >
            Let&apos;s talk
          </a>

          <a
            href={PROFILE.resume}
            download
            className="btn btn-ghost hero-fade"
            style={{ ["--i" as string]: 4 }}
          >
            Resume <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="hero-side hero-fade" style={{ ["--i" as string]: 5 }}>
        <button
          type="button"
          className="snd"
          onClick={toggle}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? "Pause the intro video" : "Play the intro video"}
        >
          {sound.blocked && isPlaying && !sound.on && (
            <span className="snd-ping" aria-hidden="true" />
          )}

          {isPlaying ? (
            /*
             * PAUSE icon
             */
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <rect x="2.5" y="1.5" width="3" height="11" rx="1" fill="currentColor" />
              <rect x="8.5" y="1.5" width="3" height="11" rx="1" fill="currentColor" />
            </svg>
          ) : (
            /*
             * PLAY icon
             */
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path
                d="M3.5 1.8v10.4a.6.6 0 0 0 .9.5l8.2-5.2a.6.6 0 0 0 0-1L4.4 1.3a.6.6 0 0 0-.9.5Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>

        <p>
          Intro
          <br />
          {PROFILE.current.title} @ {PROFILE.current.org}
        </p>

        <a href="#about" className="hero-scroll" onClick={(e) => go(e, "#about")}>
          <span>Scroll</span>
          <i aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
