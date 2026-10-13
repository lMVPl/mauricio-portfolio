/** Three locally rendered, animated illustrations for Mauricio's Selected Work.
 * Illustrative only: the graphics and numbers are not actual company data.
 */
import type { ReactNode } from "react";

const css = `
.mu{position:relative;width:100%;height:100%;min-height:240px;border-radius:18px;background:#f5f3f0;box-shadow:inset 0 0 0 1px #e5e2dd;overflow:hidden;color:#20201f;font-family:var(--font-sans)}
.mu *{box-sizing:border-box}
.mu-head{height:34px;display:flex;align-items:center;gap:5px;padding:0 14px;border-bottom:1px solid #e7e4df;font:500 10px var(--font-mono);color:#817b73;white-space:nowrap}
.mu-dot{width:7px;height:7px;border-radius:50%;background:#d8d1c7;border:1px solid #c6bbae}
.mu-head span:last-child{margin-left:8px;overflow:hidden;text-overflow:ellipsis}
.mu-content{height:calc(100% - 34px);padding:14px;display:flex;align-items:center;gap:9px}
.mu-panel{min-width:0;background:#fff;border:1px solid #e9e5df;border-radius:11px;padding:10px;box-shadow:0 2px 5px #28231b05}
.mu-label{font:600 9px/1.35 var(--font-mono);letter-spacing:.035em;text-transform:uppercase;color:#7b746b;margin-bottom:10px}
.mu-muted{color:#8c867d;font-size:9px}
.mu-col{display:flex;flex-direction:column;gap:7px;min-width:0}
.mu-item{display:flex;align-items:center;gap:7px;min-width:0;padding:6px 7px;border-radius:7px;background:#f8f7f5;font-size:10px;white-space:nowrap}
.mu-item span:last-child{overflow:hidden;text-overflow:ellipsis}
.mu-glyph{display:grid;place-items:center;flex:none;width:18px;height:18px;border-radius:5px;background:#ece8e2;color:#3c3934;font:700 12px var(--font-mono)}
.mu-line{height:5px;background:#e8e5e0;border-radius:5px}
.mu-link{flex:none;width:15px;height:2px;background:repeating-linear-gradient(90deg,#aaa399 0 4px,transparent 4px 7px);position:relative;animation:mu-dash 2.8s linear infinite}
.mu-link:after{content:"";position:absolute;right:-1px;top:-3px;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:5px solid #aaa399}
.mu-flex{flex:1;min-width:0}
.mu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:4px}
.mu-cell{height:12px;background:#eeeae4;border-radius:3px}
.mu-cell:nth-child(3n){background:#d7cfc4}
.mu-bars{height:67px;display:flex;align-items:flex-end;gap:5px;border-bottom:1px solid #d8d3cb;padding:0 4px 2px}
.mu-bars i{display:block;flex:1;background:#c9bdae;border-radius:3px 3px 0 0;transform-origin:bottom;animation:mu-bar 5s ease-in-out infinite;animation-delay:var(--delay,0s)}
.mu-bars i:last-child{background:#49453f}
.mu-chartline{width:100%;height:27px;overflow:visible}
.mu-chartline path{stroke-dasharray:120;stroke-dashoffset:120;animation:mu-draw 6s ease-in-out infinite}
.mu-folder{display:flex;align-items:center;gap:7px;font-size:10px;padding:5px 0;white-space:nowrap}
.mu-folder svg{flex:none}
.mu-person{display:flex;align-items:center;gap:6px;font-size:9px;background:#f6f4f1;border-radius:7px;padding:6px}
.mu-check{font-weight:700;color:#4e6351}
.mu-report{display:flex;align-items:center;gap:10px}
.mu-donut{flex:none;width:49px;height:49px;border-radius:50%;background:conic-gradient(#504b45 0 78%,#bdb4a8 78% 91%,#e8e3dc 91%);position:relative;animation:mu-breathe 5s ease-in-out infinite}
.mu-donut:after{content:"";position:absolute;inset:13px;background:white;border-radius:50%}
.mu-stat{height:5px;border-radius:4px;background:#e8e4df;margin:7px 0}
.mu-pulse{animation:mu-breathe 4s ease-in-out infinite;animation-delay:var(--delay,0s)}
.mu-scan{position:absolute;inset:0 auto 0 0;width:3px;background:#b7a99a77;animation:mu-sweep 6s ease-in-out infinite;pointer-events:none}
@keyframes mu-dash{to{background-position:28px 0}}
@keyframes mu-bar{0%,100%{transform:scaleY(.84)}50%{transform:scaleY(1)}}
@keyframes mu-draw{0%,12%{stroke-dashoffset:120}55%,85%{stroke-dashoffset:0}100%{stroke-dashoffset:-120}}
@keyframes mu-breathe{0%,100%{opacity:.65}50%{opacity:1}}
@keyframes mu-sweep{0%,100%{transform:translateX(0);opacity:0}20%,75%{opacity:1}80%{transform:translateX(150px);opacity:0}}
@media(max-width:1150px){.mu-content{padding:9px;gap:5px}.mu-panel{padding:7px}.mu-link{width:9px}.mu-item{font-size:9px;padding:5px 3px}}
@media(max-width:550px){.mu-content{gap:4px;padding:7px}.mu-label{font-size:7px}.mu-folder,.mu-person,.mu-item{font-size:8px}.mu-glyph{width:14px;height:14px;font-size:10px}.mu-link{width:6px}.mu-panel{padding:5px}}
@media(prefers-reduced-motion:reduce){.mu *,.mu *:before,.mu *:after{animation:none!important;transition:none!important}.mu-chartline path{stroke-dashoffset:0}}
`;

function Frame({title,children}:{title:string;children:ReactNode}){return <div className="mu"><style>{css}</style><div className="mu-head"><i className="mu-dot"/><i className="mu-dot"/><i className="mu-dot"/><span>{title}</span></div>{children}</div>}
function Panel({label,children,className="",style}:{label:string;children:ReactNode;className?:string;style?:React.CSSProperties}){return <div className={`mu-panel ${className}`} style={style}><div className="mu-label">{label}</div>{children}</div>}
function Link(){return <span className="mu-link" aria-hidden="true"/>}
function Glyph({children}:{children:ReactNode}){return <span className="mu-glyph" aria-hidden="true">{children}</span>}
function Folder({name}:{name:string}){return <div className="mu-folder"><svg width="15" height="13" viewBox="0 0 18 15" aria-hidden="true"><path d="M1 3a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z" fill="#d4c4ad" stroke="#b8a58b"/></svg><span>{name}</span></div>}

function Pricing(){return <Frame title="Pricing Dashboard.xlsx"><div className="mu-content">
<div className="mu-col" style={{flex:".83"}}>{[["▦","Raw data"],["⚙","Transform"],["▥","Analyze"]].map(([g,t],i)=><div className="mu-panel mu-pulse" key={t} style={{padding:8,"--delay":`${i*.5}s`} as React.CSSProperties}><div className="mu-item"><Glyph>{g}</Glyph><span>{t}</span></div></div>)}</div>
<Link/><Panel label="Pricing analysis" className="mu-flex"><div className="mu-grid">{Array.from({length:12},(_,i)=><span className="mu-cell" key={i}/>)}</div><div className="mu-line" style={{marginTop:12,width:"72%"}}/><div className="mu-line" style={{marginTop:6,width:"90%"}}/></Panel><Link/>
<div className="mu-col" style={{flex:1}}><Panel label="Price trends"><div className="mu-bars">{[28,38,34,55,50,75,65,92].map((v,i)=><i key={i} style={{height:`${v}%`,"--delay":`${i*.18}s`} as React.CSSProperties}/>)}</div><svg className="mu-chartline" viewBox="0 0 120 27" preserveAspectRatio="none" aria-hidden="true"><path d="M2 23 L18 19 L35 20 L51 12 L68 14 L86 6 L104 10 L118 2" stroke="#74695c" strokeWidth="1.5" fill="none"/></svg></Panel><Panel label="Reports"><div className="mu-report"><div className="mu-flex"><div className="mu-stat"/><div className="mu-stat" style={{width:"70%"}}/><div className="mu-stat" style={{width:"88%"}}/></div><div className="mu-donut" style={{width:36,height:36}}/></div></Panel></div>
</div></Frame>}
function SharePoint(){return <Frame title="Company SharePoint"><div className="mu-content">
<Panel label="Document libraries" className="mu-flex">{["General","Projects","Reports","Human Resources","Policies"].map(t=><Folder key={t} name={t}/>)}</Panel><Link/>
<Panel label="Permissions & access" className="mu-flex">{["Administrators","Operations","Finance","Sales"].map((t,i)=><div className="mu-person mu-pulse" key={t} style={{marginBottom:6,"--delay":`${i*.6}s`} as React.CSSProperties}><Glyph>♙</Glyph><span>{t}</span></div>)}</Panel><Link/>
<Panel label="Collaboration hub" className="mu-flex"><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>{[["▤","Documents"],["▦","Calendar"],["☷","Lists"],["♧","Teams"]].map(([g,t])=><div className="mu-item" key={t} style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}><Glyph>{g}</Glyph><span>{t}</span></div>)}</div></Panel>
</div></Frame>}
function Quality(){return <Frame title="Data Quality Pipeline"><div className="mu-content">
<Panel label="Data sources" className="mu-flex">{[["▧","Images"],["▤","Text"],["▶","Audio / video"],["▦","Structured data"]].map(([g,t])=><div className="mu-item" key={t} style={{marginBottom:6}}><Glyph>{g}</Glyph><span>{t}</span></div>)}</Panel><Link/>
<Panel label="Validation checks" className="mu-flex">{["Schema validation","Missing values","Data consistency","Outlier detection","Custom rules"].map((t,i)=><div className="mu-item mu-pulse" key={t} style={{background:"transparent",padding:"5px 0","--delay":`${i*.35}s`} as React.CSSProperties}><span className="mu-check">✓</span><span>{t}</span></div>)}</Panel><Link/>
<Panel label="Clean data" style={{flex:".65",position:"relative",overflow:"hidden"}}><div className="mu-grid" style={{gridTemplateColumns:"repeat(3,1fr)"}}>{Array.from({length:12},(_,i)=><span className="mu-cell" key={i}/>)}</div><span className="mu-scan"/></Panel><Link/>
<Panel label="QA report" className="mu-flex"><div className="mu-report"><div className="mu-flex"><div className="mu-bars" style={{height:52}}>{[42,70,56,88].map((v,i)=><i key={i} style={{height:`${v}%`,"--delay":`${i*.3}s`} as React.CSSProperties}/>)}</div></div><div className="mu-donut"/></div><div className="mu-stat"/><div className="mu-stat" style={{width:"78%"}}/><div className="mu-muted">Illustrative metrics</div></Panel>
</div></Frame>}
export default function MiniUI({id}:{id:string}){switch(id){case "mtm-analytics":return <Pricing/>;case "mtm-sharepoint":return <SharePoint/>;case "scale-quality":return <Quality/>;default:return <Pricing/>}}
