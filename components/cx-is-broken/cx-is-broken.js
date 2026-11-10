"use client";

import { useEffect } from "react";

import { fontVariables } from "./fonts/fonts";
import { startSite } from "./runtime/site-runtime";

export default function CxIsBroken() {
  useEffect(() => {
    let stop = null;

    const frameId = window.requestAnimationFrame(() => {
      stop = startSite();
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      stop?.();
    };
  }, []);

  return (
    <div className={`cxIsBroken ${fontVariables}`}>
      <div id="app" data-concept="d" data-skin="final" data-view="site">
        {" "}
        <header className="top">
          {" "}
          <div className="wrap">
            {" "}
            <div className="top-left">
              {" "}
              <button
                className="menu-btn"
                id="menu-btn"
                type="button"
                aria-expanded="false"
                aria-controls="drawer"
                aria-label="Open contents"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>{" "}
              <div className="mini">
                {"CX IS"}
                <span className="bar">{"BROKEN"}</span>
              </div>{" "}
            </div>{" "}
            <div className="top-center">
              <a href="/cx-is-broken/downloads/CX_is_Broken_Asset_Library.zip" target="_blank" rel="noopener noreferrer" className="mono by" download>
                {"Download our asset library →"}
              </a>
            </div>
            <div className="top-right">
              {" "}
              <a href="https://www.servefirst.ai/" target="_blank" rel="noopener noreferrer" className="mono by" style={{ textDecoration: "none" }}>
                {"by Serve First"}
              </a>
            </div>{" "}
          </div>{" "}
        </header>{" "}
        <div className="scrim" id="scrim" aria-hidden="true"></div>{" "}
        <nav className="drawer" id="drawer" aria-label="Report sections" inert>
          {" "}
          <p className="mono drawer-title">{"Contents"}</p>{" "}
          <div className="line-sidebar line-sidebar--markers line-sidebar--scale-tick">
            {" "}
            <ul className="line-sidebar__list" id="ls-list"></ul>{" "}
          </div>{" "}
          <a
            href="/cx-is-broken/downloads/CX_is_Broken_Asset_Library.zip"
            target="_blank"
            rel="noopener noreferrer"
            className="mono drawer-link"
            download
          >
            {"Download our asset library →"}
          </a>{" "}
          <p className="mono drawer-foot">
            {"CX is Broken · by Serve First"}
          </p>{" "}
        </nav>{" "}
        <main>
          {" "}
          <section className="surface s-ink hero" id="hero">
            {" "}
            <div className="wrap">
              {" "}
              <h1 aria-label="CX is broken">
                {" "}
                <span className="cxis">
                  <span className="ransom" data-seed="7">
                    {"CX IS"}
                  </span>
                </span>{" "}
                <span className="bar" id="hero-word">
                  {"BROKEN"}
                </span>{" "}
              </h1>{" "}
              <div className="hero-foot">
                {" "}
                <div className="hero-copy">
                  {" "}
                  <p className="hero-sub">
                    {
                      "Why Operational Excellence is the future of customer experience"
                    }
                  </p>{" "}
                  <p className="mono hero-meta">
                    {"Insights from 250 CX leaders"}
                  </p>{" "}
                  <div className="hero-ctas">
                    <a className="btn" href="#gate">
                      {"Download the PDF"}
                    </a>
                    <a className="btn btn-ghost" href="#bench">
                      {"Benchmark your CX"}
                    </a>
                  </div>{" "}
                </div>{" "}
                <div className="hero-sticker" aria-hidden="true">
                  {"Sorry for any inconvenience"}
                </div>{" "}
                <div className="cue mono">
                  <span aria-hidden="true"></span>
                  {"Scroll"}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <div className="tapes tloop" aria-hidden="true">
            {" "}
            <svg className="tloop-svg" id="tloop" preserveAspectRatio="none">
              {" "}
              <text className="tloop-text tloop-measure" id="tloop-m"></text>{" "}
              <g id="tloop-move">
                <path
                  id="tloop-path"
                  className="tloop-ribbon"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <text className="tloop-text" dominantBaseline="central">
                  <textPath
                    id="tloop-h"
                    href="#tloop-path"
                    lengthAdjust="spacing"
                  ></textPath>
                </text>

                <g id="tloop-icons" className="tloop-ico"></g>
              </g>{" "}
              <defs>
                <symbol id="tl-ico" viewBox="-26 -26 52 52" overflow="visible">
                  <path
                    transform="translate(-3 0)"
                    d="M0 -20 L5 -9 L-1 -1 L4 8 L0 20 A20 20 0 0 1 0 -20 Z"
                  />
                  <path
                    transform="translate(4 -2) rotate(8)"
                    d="M0 -20 L5 -9 L-1 -1 L4 8 L0 20 A20 20 0 0 0 0 -20 Z"
                  />
                </symbol>
              </defs>{" "}
            </svg>{" "}
          </div>{" "}
          <section
            className="surface s-sun chapter intro"
            id="start"
            data-p
            data-widget="buzz"
          >
            {" "}
            <div className="wrap one">
              {" "}
              <div className="manifesto">
                {" "}
                <p className="lead">
                  {
                    "For more than twenty years, the customer experience (CX) industry has sold the same fantasy. Every few years a new acronym, methodology or platform promises that "
                  }
                  <em>{"this time"}</em>
                  {" your customer experience will finally be transformed."}
                </p>{" "}
                <p
                  className="buzz"
                  aria-label="Joined-up journeys. Omnichannel. Single customer views. Experience management. Enough."
                >
                  <s>
                    <span>{"Joined-up journeys."}</span>
                  </s>{" "}
                  <s>
                    <span>{"Omnichannel."}</span>
                  </s>{" "}
                  <s>
                    <span>{"Single customer views."}</span>
                  </s>{" "}
                  <s>
                    <span>{"Experience management."}</span>
                  </s>{" "}
                  <span className="enough">{"Enough."}</span>
                </p>{" "}
                <div className="close-row">
                  {" "}
                  <p>
                    {
                      "Billions later, businesses are still struggling and frontline teams are fighting the same problems they were twenty years ago. CX has been treated as something you can fix on its own, but it's shaped by how well the business behind it actually works. So we asked "
                    }
                    <strong>{"250 CX professionals"}</strong>
                    {" why decades of investment haven't delivered. "}
                    <strong>
                      {
                        "Some of the findings are uncomfortable. Good. It's about time we built something better."
                      }
                    </strong>
                  </p>{" "}
                  <div className="byline">
                    {" "}
                    <span className="avatar" aria-hidden="true">
                      {"EA"}
                    </span>{" "}
                    <span>
                      <strong>{"Erol Ayvaz"}</strong>
                      <br />
                      <span className="mono">{"CEO, Serve First"}</span>
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            className="surface s-ink chapter"
            data-p
            data-fault
            data-widget="progress"
          >
            {" "}
            <div className="wrap">
              {" "}
              <div>
                {" "}
                <span className="kicker">{"Fault 01 · Promises"}</span>{" "}
                <h2>
                  {"Promises, "}
                  <span className="ransom" data-seed="11">
                    {"promises"}
                  </span>
                </h2>{" "}
                <p className="body">
                  {
                    "After decades of investment, the same problems keep coming back. CX leaders are still struggling to turn insight into action, empower frontline teams and get the wider business to take ownership. Meanwhile, many believe the technologies and trends they were sold simply haven't delivered."
                  }
                </p>{" "}
                <p className="body">
                  {
                    "The industry has become very good at telling businesses what went wrong, but fixing it is another matter."
                  }
                </p>{" "}
              </div>{" "}
              <div className="panel">
                {" "}
                <span className="sticker" aria-hidden="true">
                  {"Void"}
                </span>{" "}
                <div className="panel-head mono">
                  <span>{"CX transformation"}</span>
                  <span
                    className="state"
                    data-state
                    data-broken="Stuck"
                    data-fixed="Stopped"
                  >
                    {"Stuck"}
                  </span>
                </div>{" "}
                <div className="big-num" data-el="pct">
                  {"99%"}
                </div>{" "}
                <div className="progress" data-el="bar">
                  <b></b>
                </div>{" "}
                <div className="progress-row mono">
                  <span data-el="line">{"Installing: the next big trend"}</span>
                  <span>{"Since 2006"}</span>
                </div>{" "}
              </div>{" "}
              <div className="stats notes">
                {" "}
                <div className="st">
                  <span
                    className="n redact"
                    tabIndex={0}
                    role="button"
                    aria-label="Reveal figure"
                    data-value="80%"
                  >
                    {"80%"}
                  </span>
                  <span className="l">
                    {
                      "believe at least one major CX trend has failed to live up to its promises"
                    }
                  </span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="59" data-suffix="%">
                    {"59%"}
                  </span>
                  <span className="l">
                    {
                      "say platform vendors have promised capabilities that never materialised"
                    }
                  </span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="58" data-suffix="%">
                    {"58%"}
                  </span>
                  <span className="l">
                    {
                      "say traditional CX platforms often promise more than they deliver"
                    }
                  </span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="56" data-suffix="%">
                    {"56%"}
                  </span>
                  <span className="l">
                    {
                      "say traditional CX platforms make problems easier to identify than solve"
                    }
                  </span>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            className="surface s-hot chapter"
            data-p
            data-fault
            data-widget="bars"
          >
            {" "}
            <div className="wrap">
              {" "}
              <div>
                {" "}
                <span className="kicker">{"Fault 02 · Problems"}</span>{" "}
                <h2>
                  {"The biggest CX problems haven't "}
                  <span className="ransom" data-seed="23">
                    {"changed"}
                  </span>
                </h2>{" "}
                <p className="body">
                  {
                    "The biggest challenges facing CX teams are strikingly practical. They aren't asking for another way to collect feedback. They need to turn insight into action, give frontline teams more power to solve problems and persuade the rest of the business to take responsibility for the experiences it creates."
                  }
                </p>{" "}
              </div>{" "}
              <div className="panel">
                {" "}
                <span className="sticker" aria-hidden="true">
                  {"Out of order"}
                </span>{" "}
                <div className="panel-head mono">
                  <span>{"Top CX challenges in 2026"}</span>
                  <span
                    className="state"
                    data-state
                    data-broken="Unsorted"
                    data-fixed="Sorted"
                  >
                    {"Unsorted"}
                  </span>
                </div>{" "}
                <div className="bars" style={{ "--n": "5" }}>
                  {" "}
                  <div
                    className="brow"
                    style={{ "--v": "36", "--i": "0", "--j": "3" }}
                    title="Empowering frontline employees to resolve customer issues"
                  >
                    <span className="lab">
                      {"Empowering frontline employees"}
                    </span>
                    <span className="val">{"36%"}</span>
                    <span className="track">
                      <b></b>
                    </span>
                  </div>{" "}
                  <div
                    className="brow"
                    style={{ "--v": "36", "--i": "1", "--j": "0" }}
                    title="Turning customer insight into action"
                  >
                    <span className="lab">{"Turning insight into action"}</span>
                    <span className="val">{"36%"}</span>
                    <span className="track">
                      <b></b>
                    </span>
                  </div>{" "}
                  <div
                    className="brow"
                    style={{ "--v": "34", "--i": "2", "--j": "4" }}
                    title="Getting other departments to take ownership of customer experience"
                  >
                    <span className="lab">{"Other departments owning CX"}</span>
                    <span className="val">{"34%"}</span>
                    <span className="track">
                      <b></b>
                    </span>
                  </div>{" "}
                  <div
                    className="brow"
                    style={{ "--v": "28", "--i": "3", "--j": "1" }}
                    title="Limited budget or resources"
                  >
                    <span className="lab">{"Limited budget or resources"}</span>
                    <span className="val">{"28%"}</span>
                    <span className="track">
                      <b></b>
                    </span>
                  </div>{" "}
                  <div
                    className="brow"
                    style={{ "--v": "21", "--i": "4", "--j": "2" }}
                    title="Too many disconnected tools or platforms"
                  >
                    <span className="lab">{"Too many disconnected tools"}</span>
                    <span className="val">{"21%"}</span>
                    <span className="track">
                      <b></b>
                    </span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            className="surface s-ink chapter"
            data-p
            data-fault
            data-widget="meters"
          >
            {" "}
            <div className="wrap">
              {" "}
              <div>
                {" "}
                <span className="kicker">{"Fault 03 · Workload"}</span>{" "}
                <h2>
                  {"CX teams are drowning in "}
                  <span className="ransom" data-seed="31">
                    {"tech"}
                  </span>
                </h2>{" "}
                <p className="body">
                  {
                    "CX teams spend much of their time managing the consequences of poor experiences or maintaining the technology built to improve them. Almost half say most team time goes on complaints or CX platforms."
                  }
                </p>{" "}
                <p className="body">
                  {
                    "Very little goes on supporting frontline teams or making the operational changes that could stop those problems happening again."
                  }
                </p>{" "}
              </div>{" "}
              <div className="panel">
                {" "}
                <span className="sticker" aria-hidden="true">
                  {"Overloaded"}
                </span>{" "}
                <div className="panel-head mono">
                  <span>{"Where most team time goes"}</span>
                  <span
                    className="state"
                    data-state
                    data-broken="99+ alerts"
                    data-fixed="Clear"
                  >
                    {"99+ alerts"}
                  </span>
                </div>{" "}
                <div className="bars static" style={{ "--n": "3" }}>
                  {" "}
                  <div
                    className="brow"
                    style={{ "--v": "49", "--i": "0", "--j": "0" }}
                  >
                    <span className="lab">
                      {"Issues, complaints and platforms"}
                    </span>
                    <span className="val">{"49%"}</span>
                    <span className="track">
                      <b></b>
                    </span>
                  </div>{" "}
                  <div
                    className="brow"
                    style={{ "--v": "13", "--i": "1", "--j": "1" }}
                  >
                    <span className="lab">{"Supporting frontline teams"}</span>
                    <span className="val">{"13%"}</span>
                    <span className="track">
                      <b></b>
                    </span>
                  </div>{" "}
                  <div
                    className="brow"
                    style={{ "--v": "6", "--i": "2", "--j": "2" }}
                  >
                    <span className="lab">
                      {"Driving operational improvements"}
                    </span>
                    <span className="val">{"6%"}</span>
                    <span className="track">
                      <b></b>
                    </span>
                  </div>{" "}
                </div>{" "}
                <div className="mono small">
                  {
                    "Share of CX leaders who say most of their team's time goes here"
                  }
                </div>{" "}
              </div>{" "}
              <div className="stat-row lead">
                {" "}
                <span
                  className="stat redact"
                  tabIndex={0}
                  role="button"
                  aria-label="Reveal figure"
                  data-value="49%"
                >
                  {"49%"}
                </span>{" "}
                <span className="stat-label">
                  {
                    "say most team time goes to responding to issues and complaints or managing CX platforms and technology"
                  }
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            className="surface s-sun chapter"
            data-p
            data-fault
            data-widget="wins"
          >
            {" "}
            <div className="wrap">
              {" "}
              <div>
                {" "}
                <span className="kicker">{"Fault 04 · Platforms"}</span>{" "}
                <h2>
                  {"More platforms. Same "}
                  <span className="ransom" data-seed="37">
                    {"problems."}
                  </span>
                </h2>{" "}
                <p className="body">
                  {
                    "Businesses aren't short of CX technology. The average organisation uses 3.4 platforms and more than a third use four or more."
                  }
                </p>{" "}
                <p className="body">
                  {
                    "Yet many still struggle with the most important part: turning insight into immediate action. Adding more tools has created more data, but not necessarily a faster route from spotting a problem to solving it."
                  }
                </p>{" "}
              </div>{" "}
              <div className="panel">
                {" "}
                <span className="sticker" aria-hidden="true">
                  {"Rejected"}
                </span>{" "}
                <div className="panel-head mono">
                  <span>{"Platforms in use"}</span>
                  <span
                    className="state"
                    data-state
                    data-broken="Not synced"
                    data-fixed="Connected"
                  >
                    {"Not synced"}
                  </span>
                </div>{" "}
                <div className="plat-head">
                  {" "}
                  <span
                    className="stat redact"
                    tabIndex={0}
                    role="button"
                    aria-label="Reveal figure"
                    data-value="3.4"
                  >
                    {"3.4"}
                  </span>{" "}
                  <span className="stat-label">
                    {"CX platforms used by the average organisation"}
                  </span>{" "}
                </div>{" "}
                <div
                  className="plat"
                  role="img"
                  aria-label="Unit chart: 3.4 platforms out of a scale of 4"
                >
                  {" "}
                  <div className="plat-tiles">
                    {" "}
                    <div
                      className="ptile"
                      style={{ "--dx": "14px", "--dy": "22px", "--dr": "-7deg" }}
                    >
                      <b></b>
                      <span className="mono">{"Platform 1"}</span>
                    </div>{" "}
                    <div
                      className="ptile"
                      style={{ "--dx": "-18px", "--dy": "-12px", "--dr": "8deg" }}
                    >
                      <b></b>
                      <span className="mono">{"Platform 2"}</span>
                    </div>{" "}
                    <div
                      className="ptile"
                      style={{ "--dx": "-34px", "--dy": "24px", "--dr": "-5deg" }}
                    >
                      <b></b>
                      <span className="mono">{"Platform 3"}</span>
                    </div>{" "}
                    <div
                      className="ptile part"
                      style={{ "--dx": "-50px", "--dy": "-8px", "--dr": "12deg" }}
                    >
                      <b></b>
                      <span className="mono">{"0.4"}</span>
                    </div>{" "}
                  </div>{" "}
                  <div className="plat-axis" aria-hidden="true">
                    {" "}
                    <i style={{ "--x": "0" }}>{"0"}</i>
                    <i style={{ "--x": "1" }}>{"1"}</i>
                    <i style={{ "--x": "2" }}>{"2"}</i>
                    <i style={{ "--x": "3" }}>{"3"}</i>
                    <i style={{ "--x": "4" }}>{"4"}</i>{" "}
                    <em style={{ "--x": "3.4" }}>{"Average 3.4"}</em>{" "}
                  </div>{" "}
                  <p className="mono small plat-key">
                    {
                      "One tile = one CX platform. Each holds part of the customer picture, none holds all of it."
                    }
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="stats notes">
                {" "}
                <div className="st">
                  <span className="n" data-to="87" data-suffix="%">
                    {"87%"}
                  </span>
                  <span className="l">{"use at least two CX platforms"}</span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="36" data-suffix="%">
                    {"36%"}
                  </span>
                  <span className="l">{"use four or more CX platforms"}</span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="56" data-suffix="%">
                    {"56%"}
                  </span>
                  <span className="l">
                    {
                      "say their current platforms mean frontline teams don't receive customer insight quickly enough"
                    }
                  </span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="55" data-suffix="%">
                    {"55%"}
                  </span>
                  <span className="l">
                    {
                      "say too many customer issues remain unresolved despite being identified"
                    }
                  </span>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            className="surface s-ink chapter"
            data-p
            data-fault
            data-widget="trends"
          >
            {" "}
            <div className="wrap">
              {" "}
              <div>
                {" "}
                <span className="kicker">{"Fault 05 · Trends"}</span>{" "}
                <h2>
                  {"20 years of broken "}
                  <span className="ransom" data-seed="41">
                    {"promises"}
                  </span>
                </h2>{" "}
                <p className="body">
                  {
                    "CX has never been short of big promises. Suppliers have sold real-time insight, Voice of the Customer and journey mapping as the next breakthrough in better experiences."
                  }
                </p>{" "}
                <p className="body">
                  {
                    "And yet, eight in 10 CX professionals say at least one major trend has failed to live up to the hype. Too often, traditional CX platforms add another layer of technology without fixing what sits underneath. The names change, but the underlying problems survive."
                  }
                </p>{" "}
              </div>{" "}
              <div className="panel">
                {" "}
                <span className="sticker" aria-hidden="true">
                  {"Expired"}
                </span>{" "}
                <div className="panel-head mono">
                  <span>{"Trends that failed the hype"}</span>
                  <span
                    className="state"
                    data-state
                    data-broken="Still selling"
                    data-fixed="Retired"
                  >
                    {"Still selling"}
                  </span>
                </div>{" "}
                <ol className="trends">
                  {" "}
                  <li>
                    <span>
                      <span className="tx">{"Real-time customer insight"}</span>
                    </span>
                    <span className="mono">{"29%"}</span>
                  </li>{" "}
                  <li>
                    <span>
                      <span className="tx">{"Voice of the Customer"}</span>
                    </span>
                    <span className="mono">{"21%"}</span>
                  </li>{" "}
                  <li>
                    <span>
                      <span className="tx">{"Customer journey mapping"}</span>
                    </span>
                    <span className="mono">{"20%"}</span>
                  </li>{" "}
                  <li>
                    <span>
                      <span className="tx">{"Single Customer View"}</span>
                    </span>
                    <span className="mono">{"18%"}</span>
                  </li>{" "}
                  <li>
                    <span>
                      <span className="tx">{"Personalisation"}</span>
                    </span>
                    <span className="mono">{"18%"}</span>
                  </li>{" "}
                </ol>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section className="surface s-hot chapter" data-p data-fault>
            {" "}
            <div className="wrap vend">
              {" "}
              <div>
                {" "}
                <span className="kicker">{"Fault 06 · Vendors"}</span>{" "}
                <h2>
                  {"Overpromise. "}
                  <span className="ransom" data-seed="47">
                    {"Underdeliver."}
                  </span>
                </h2>{" "}
                <p className="body">
                  {
                    "The disappointment with traditional CX platforms runs deeper than industry buzzwords. CX leaders say vendors themselves have promised capabilities that never arrived, promoted features before they were ready and sold technology that failed to deliver the functionality buyers expected."
                  }
                </p>{" "}
                <p className="body">
                  {
                    "For an industry built around understanding customers, there is a sizeable gap between the experience vendors promise and the one they deliver."
                  }
                </p>{" "}
                <div className="stats notes">
                  {" "}
                  <div className="st">
                    <span
                      className="n redact"
                      tabIndex={0}
                      role="button"
                      aria-label="Reveal figure"
                      data-value="59%"
                    >
                      {"59%"}
                    </span>
                    <span className="l">
                      {
                        "say traditional CX platform vendors have promised capabilities that never materialised"
                      }
                    </span>
                  </div>{" "}
                  <div className="st">
                    <span className="n" data-to="54" data-suffix="%">
                      {"54%"}
                    </span>
                    <span className="l">
                      {
                        "think vendors promote features that aren't fully developed or ready for use"
                      }
                    </span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="video in-panel vert">
                {" "}
                <div className="frame" data-video="vendors">
                  <span className="mono tag">{"Video · coming soon"}</span>
                  <span className="play" aria-hidden="true"></span>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            className="surface s-ink chapter"
            data-p
            data-fault
            data-widget="ticket"
          >
            {" "}
            <div className="wrap">
              {" "}
              <div>
                {" "}
                <span className="kicker">{"Fault 07 · Action"}</span>{" "}
                <h2>
                  {"All insight. No "}
                  <span className="ransom" data-seed="53">
                    {"action."}
                  </span>
                </h2>{" "}
                <p className="body">
                  {
                    "This is where CX failure becomes visible. More than half say frontline teams don't receive customer insight quickly enough. Once an issue is identified, resolution can still take days. Businesses can spot a problem, record it and report on it while more customers continue to experience exactly the same thing."
                  }
                </p>{" "}
              </div>{" "}
              <div className="panel">
                {" "}
                <span className="sticker" aria-hidden="true">
                  {"No action"}
                </span>{" "}
                <div className="panel-head mono">
                  <span>{"Customer issue"}</span>
                  <span
                    className="state"
                    data-state
                    data-broken="Open"
                    data-fixed="Resolved"
                  >
                    {"Open"}
                  </span>
                </div>{" "}
                <ul className="steps">
                  {" "}
                  <li className="done">{"Spotted"}</li>{" "}
                  <li className="done">{"Recorded"}</li>{" "}
                  <li className="done">{"Reported"}</li>{" "}
                  <li data-el="fixstep">{"Fixed"}</li>{" "}
                </ul>{" "}
                <div className="big-num" data-el="age">
                  {"Open 12.7 days"}
                </div>{" "}
                <div className="mono" data-el="note">
                  {"More customers affected while it waits"}
                </div>{" "}
              </div>{" "}
              <div className="stat-row lead">
                {" "}
                <span
                  className="stat redact"
                  tabIndex={0}
                  role="button"
                  aria-label="Reveal figure"
                  data-value="12.7"
                >
                  {"12.7"}
                </span>{" "}
                <span className="stat-label">
                  {"days is the average "}
                  <br />
                  {"resolution time"}
                </span>{" "}
              </div>{" "}
              <div className="stats notes">
                {" "}
                <div className="st">
                  <span className="n" data-to="55" data-suffix="%">
                    {"55%"}
                  </span>
                  <span className="l">
                    {
                      "say too many issues remain unresolved despite being identified"
                    }
                  </span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="14" data-suffix="%">
                    {"14%"}
                  </span>
                  <span className="l">
                    {
                      "say issues identified for frontline action are resolved in a day"
                    }
                  </span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="52" data-suffix="%">
                    {"52%"}
                  </span>
                  <span className="l">
                    {"say resolution takes at least four days"}
                  </span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="34" data-suffix="%">
                    {"34%"}
                  </span>
                  <span className="l">
                    {"say resolution takes at least a week"}
                  </span>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            className="surface s-sun chapter"
            data-p
            data-fault
            data-widget="chat"
          >
            {" "}
            <div className="wrap">
              {" "}
              <div>
                {" "}
                <span className="kicker">{"Fault 08 · Frontline"}</span>{" "}
                <h2>
                  {"Insight isn't reaching the "}
                  <span className="ransom" data-seed="59">
                    {"frontline"}
                  </span>
                </h2>{" "}
                <p className="body">
                  {
                    "The people closest to customers are often best placed to solve their problems. CX leaders know that and want frontline teams trusted to act without waiting for approval. And yet, current systems still leave too much distance between the insight and the people who can "
                  }
                  <strong>{"do something about it."}</strong>
                </p>{" "}
              </div>{" "}
              <div className="panel">
                {" "}
                <span className="sticker" aria-hidden="true">
                  {"Pending"}
                </span>{" "}
                <div className="panel-head mono">
                  <span>{"Team chat"}</span>
                  <span
                    className="state"
                    data-state
                    data-broken="Awaiting approval"
                    data-fixed="Trusted"
                  >
                    {"Awaiting approval"}
                  </span>
                </div>{" "}
                <div className="chat">
                  {" "}
                  <div className="msg me">
                    {
                      "Table 6 says their meal came out cold. Can I take it off the bill?"
                    }
                  </div>{" "}
                  <div className="msg me">{"Still waiting on this one"}</div>{" "}
                  <div
                    className="typing"
                    data-el="typing"
                    aria-label="Manager is typing"
                  >
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>{" "}
                  <div className="msg" data-el="reply" hidden>
                    {
                      "You don't need to ask. You're closest to the customer, so sort it."
                    }
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="stats notes">
                {" "}
                <div className="st">
                  <span
                    className="n redact"
                    tabIndex={0}
                    role="button"
                    aria-label="Reveal figure"
                    data-value="73%"
                  >
                    {"73%"}
                  </span>
                  <span className="l">
                    {
                      "believe the people closest to customers should have the greatest authority to improve experiences"
                    }
                  </span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="70" data-suffix="%">
                    {"70%"}
                  </span>
                  <span className="l">
                    {
                      "think frontline teams should be trusted to act without waiting for approval"
                    }
                  </span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="70" data-suffix="%">
                    {"70%"}
                  </span>
                  <span className="l">
                    {
                      "believe CX teams need visibility across the whole organisation to have an impact"
                    }
                  </span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="66" data-suffix="%">
                    {"66%"}
                  </span>
                  <span className="l">
                    {"want more responsibility for improving business operations"}
                  </span>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section className="surface s-hot split" data-p>
            {" "}
            <div className="wrap">
              {" "}
              <div className="words" aria-label="Broken">
                <div className="word w1" aria-hidden="true">
                  {"BRO"}
                </div>
                <div className="word w2" aria-hidden="true">
                  {"KEN"}
                </div>
              </div>{" "}
              <p>
                {
                  "Better measurement can show you where the problem is. On its own, it doesn't fix the underlying cause."
                }
              </p>{" "}
            </div>{" "}
            <div className="wrap split-alt" aria-hidden="true">
              <div className="words">
                <div className="word w1">{"FIX"}</div>

                <div className="word w2">{"ABLE"}</div>
              </div>

              <p>
                {"Operational Excellence fixes the cause, not just the\u00a0score."}
              </p>
            </div>
          </section>{" "}
          <section className="surface s-ink chapter" data-p data-widget="stars">
            {" "}
            <div className="wrap">
              {" "}
              <div>
                {" "}
                <span className="kicker">{"Diagnosis"}</span>{" "}
                <h2>
                  {"CX has been fixing the "}
                  <span className="ransom" data-seed="61">
                    {"wrong"}
                  </span>
                  {" thing"}
                </h2>{" "}
                <p className="body">
                  {
                    "Customer experience is created by the way a business operates. Slow service, broken processes and unresolved problems become bad experiences for customers."
                  }
                </p>{" "}
                <p className="body">
                  {
                    "Yet CX has spent years focusing on measuring those experiences after they happen. Better measurement can show you where the problem is. On its own, it doesn't fix the underlying cause."
                  }
                </p>{" "}
              </div>{" "}
              <div className="panel" aria-live="polite">
                {" "}
                <span className="sticker peeled" aria-hidden="true">
                  {"Measured again"}
                </span>{" "}
                <div className="panel-head mono">
                  <span>{"Customer feedback"}</span>
                  <span
                    className="state"
                    data-state
                    data-broken="Not rated"
                    data-fixed="Measured"
                  >
                    {"Not rated"}
                  </span>
                </div>{" "}
                <div
                  className="stars"
                  id="stars"
                  role="group"
                  aria-label="Rate your experience"
                ></div>{" "}
                <div className="big-num unrated" id="rating">
                  {"Rate your experience"}
                </div>{" "}
                <div className="mono" id="rating-note" hidden></div>{" "}
                <p
                  className="rate-msg"
                  id="rate-msg"
                  aria-live="polite"
                  hidden
                ></p>{" "}
              </div>{" "}
              <div className="fullrow">
                {" "}
                <h3 className="subhead">{"Fix your operations first"}</h3>{" "}
                <p className="body">
                  {
                    "CX leaders are ready for a different approach. Three-quarters say improving customer experience starts with improving operations, while nearly two-thirds think CX has become too focused on measurement. The priority is shifting from understanding problems in greater detail to improving the parts of the business that create them."
                  }
                </p>{" "}
              </div>{" "}
              <div className="stats notes three-two">
                {" "}
                <div className="st">
                  <span className="n" data-to="75" data-suffix="%">
                    {"75%"}
                  </span>
                  <span className="l">
                    {
                      "agree improving customer experience starts with improving business operations"
                    }
                  </span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="72" data-suffix="%">
                    {"72%"}
                  </span>
                  <span className="l">
                    {
                      "think customer insight should primarily be used to improve operations rather than simply measure customer experiences"
                    }
                  </span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="64" data-suffix="%">
                    {"64%"}
                  </span>
                  <span className="l">
                    {
                      "think customer experience has become too focused on measurement"
                    }
                  </span>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            className="surface s-sun chapter settled opx"
            data-p
            style={{ "--p": "1" }}
          >
            {" "}
            <div className="wrap">
              {" "}
              <div>
                {" "}
                <span className="kicker">{"The fix"}</span>{" "}
                <h2>{"Operational Excellence: the new CX"}</h2>{" "}
                <p className="body">
                  {
                    "Operational Excellence is about making every part of an organisation work better together. It gives teams the insight and ownership they need to identify problems and act quickly."
                  }
                </p>{" "}
                <p className="body">
                  {
                    "Better customer experience becomes the result of a business that is continuously improving how it operates."
                  }
                </p>{" "}
              </div>{" "}
              <div className="pillars">
                {" "}
                <div>
                  <h3>{"Customer-first operations"}</h3>
                  <p>
                    {
                      "Every decision starts with improving outcomes for customers and the business, rather than simply hitting internal KPIs."
                    }
                  </p>
                </div>{" "}
                <div>
                  <h3>{"Continuous improvement"}</h3>
                  <p>
                    {
                      "Every interaction and piece of feedback becomes an opportunity to improve how the organisation works."
                    }
                  </p>
                </div>{" "}
                <div>
                  <h3>{"Empowered frontline teams"}</h3>
                  <p>
                    {
                      "The people closest to customers get the visibility and responsibility they need to solve problems quickly."
                    }
                  </p>
                </div>{" "}
                <div>
                  <h3>{"Data-driven action"}</h3>
                  <p>
                    {
                      "Customer feedback and operational data are used together to identify priorities and drive action."
                    }
                  </p>
                </div>{" "}
              </div>{" "}
              <div className="stats boxed">
                {" "}
                <div className="st">
                  <span className="n" data-to="73" data-suffix="%">
                    {"73%"}
                  </span>
                  <span className="l">
                    {
                      "believe every business should have an Operational Excellence strategy"
                    }
                  </span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="68" data-suffix="%">
                    {"68%"}
                  </span>
                  <span className="l">
                    {
                      "believe the future of customer experience lies in Operational Excellence"
                    }
                  </span>
                </div>{" "}
                <div className="st">
                  <span className="n" data-to="62" data-suffix="%">
                    {"62%"}
                  </span>
                  <span className="l">
                    {
                      "think Operational Excellence will eventually replace CX as the dominant business discipline"
                    }
                  </span>
                </div>{" "}
              </div>{" "}
              <div className="xpand" id="xpand">
                {" "}
                <div className="xpand-stick">
                  {" "}
                  <div
                    className="frame xpand-frame"
                    data-video="operationalExcellence"
                    aria-label="Video: CX vs Operational Excellence, coming soon"
                  >
                    <span className="mono tag">{"Video · coming soon"}</span>
                    <span className="play" aria-hidden="true"></span>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            className="surface s-ink chapter settled"
            data-p
            style={{ "--p": "1" }}
          >
            {" "}
            <div className="wrap">
              {" "}
              <div>
                {" "}
                <span className="kicker">{"Why we built Serve First"}</span>{" "}
                <h2>{"The world doesn't need another CX platform"}</h2>{" "}
                <p className="body">
                  {"Serve First is an "}
                  <strong>{"Operational Excellence platform"}</strong>
                  {
                    " that connects customer, operational and market signals in one place, then helps teams understand what needs attention and act on it quickly."
                  }
                </p>{" "}
                <p className="body">
                  {
                    "So instead of simply measuring experience, businesses can use insight to improve how the operation actually runs, spotting issues earlier, fixing the root cause and stopping the same problems from coming back. Because the best way to improve customer experience is to improve the business delivering it."
                  }
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="mono loop-title">
                  {"It works through a simple loop"}
                </p>{" "}
                <ol className="loop">
                  {" "}
                  <li>
                    <span className="mono">{"01"}</span>
                    <h3>{"Capture"}</h3>
                    <p>
                      {
                        "Signals from across the business in real time, from surveys and reviews to audits, feedback terminals and operational data."
                      }
                    </p>
                  </li>{" "}
                  <li>
                    <span className="mono">{"02"}</span>
                    <h3>{"Analyse"}</h3>
                    <p>
                      {
                        "AI analyses those signals, surfaces the themes that matter and highlights where action is needed."
                      }
                    </p>
                  </li>{" "}
                  <li>
                    <span className="mono">{"03"}</span>
                    <h3>{"Action"}</h3>
                    <p>
                      {
                        "Insight becomes tasks and workflows routed to exactly the right people on the frontline, with progress tracked through to completion."
                      }
                    </p>
                  </li>{" "}
                </ol>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            className="surface s-ink chapter settled sfx cta-block"
            data-p
            style={{ "--p": "1" }}
          >
            {" "}
            <div className="wrap one">
              {" "}
              <div className="closer">
                {" "}
                <p className="big-line">{"Stop fixing. Start preventing."}</p>{" "}
                <a className="btn" href="https://www.servefirst.ai/get-a-demo" target="_blank">
                  {"Discover Serve First"}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <section
            className="surface s-hot chapter settled benchmark"
            data-p
            style={{ "--p": "1" }}
          >
            {" "}
            <div className="wrap one">
              {" "}
              <div className="cxb" id="bench" aria-live="polite"></div>{" "}
            </div>{" "}
          </section>{" "}
          <section className="surface s-sun gate" id="gate">
            {" "}
            <div className="wrap">
              {" "}
              <div>
                {" "}
                <div className="lockup" aria-live="polite">
                  {" "}
                  <span className="l1">
                    <span className="ransom" data-seed="7">
                      {"CX IS"}
                    </span>
                  </span>{" "}
                  <span className="bar" id="lock-word">
                    {"BROKEN"}
                  </span>{" "}
                  <span className="sticker" id="gate-sticker" aria-hidden="true">
                    {"Still broken"}
                  </span>{" "}
                </div>{" "}
                <p className="gate-copy">
                  {
                    "Get the full report. Why Operational Excellence is the future of customer experience, with insights from 250 CX leaders."
                  }
                </p>{" "}
                <a className="btn" href="https://www.servefirst.ai" target="_blank">
                  {"Talk to Serve First"}
                </a>{" "}
              </div>{" "}
              <div id="gate-side">
                {" "}
                <form id="form" noValidate data-hs-do-not-collect="true">
                  {" "}
                  <div className="row2">
                    {" "}
                    <div className="field">
                      <label htmlFor="f-firstname">{"First name"}</label>
                      <input
                        id="f-firstname"
                        name="firstname"
                        autoComplete="given-name"
                        required
                        placeholder="First name"
                      />
                    </div>{" "}
                    <div className="field">
                      <label htmlFor="f-lastname">{"Last name"}</label>
                      <input
                        id="f-lastname"
                        name="lastname"
                        autoComplete="family-name"
                        required
                        placeholder="Last name"
                      />
                    </div>{" "}
                  </div>{" "}
                  <div className="field">
                    <label htmlFor="f-company">{"Company"}</label>
                    <input
                      id="f-company"
                      name="company"
                      autoComplete="organization"
                      required
                      placeholder="Company"
                    />
                  </div>{" "}
                  <div className="field">
                    <label htmlFor="f-email">{"Work email"}</label>
                    <input
                      id="f-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Work email"
                    />
                  </div>{" "}
                  <div className="field">
                    <label htmlFor="f-role">{"Role"}</label>{" "}
                    <select id="f-role" name="role">
                      {" "}
                      <option>{"Head of CX"}</option>
                      <option>{"Customer service lead"}</option>
                      <option>{"Operations"}</option>
                      <option>{"Marketing"}</option>
                      <option>{"Other"}</option>{" "}
                    </select>{" "}
                  </div>{" "}
                  <p className="err" id="err" role="alert"></p>{" "}
                  <button className="submit" type="submit">
                    {"Fix it · download the PDF"}
                  </button>{" "}
                  <p
                    className="mono form-note"
                    style={{ margin: "0", opacity: ".7" }}
                  >
                    {"We'll email you a copy. "}
                    <a href="https://www.servefirst.ai/legal/privacy-policy" className="privacy-link" target="_blank" rel="noopener noreferrer">
                      {"Privacy notice"}
                    </a>
                  </p>{" "}
                </form>{" "}
                <div className="done-msg" id="done" hidden>
                  {" "}
                  <span className="mono">{"Status · resolved"}</span>{" "}
                  <h3>{"Report unlocked"}</h3>{" "}
                  <p style={{ margin: "0" }}>
                    {
                      "Your download should start now. We've also sent a copy to your inbox."
                    }
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
        </main>{" "}
        <footer className="surface s-ink">
          {" "}
          <div className="wrap mono">
            {" "}
            <span>{"CX is Broken · a campaign by Serve First"}</span>{" "}
            <a style={{ display: 'block !important' }} href="/cx-is-broken/downloads/CX_is_Broken_Asset_Library.zip" target="_blank" rel="noopener noreferrer" className="mono by" download>
              {"Download our asset library →"}
            </a>
            <span>{"© 2026 Serve First"}</span>{" "}
          </div>{" "}
          <div className="wrap mono footerMethodology">
            {" "}
            <p>
              {"Research Methodology"}
              <span className="mono footerMethodologyBody">{"Research was conducted by 3Gem on behalf of Serve First in August 2026 among 250 UK customer experience leaders and decision-makers working in retail, hospitality and other customer-facing sectors."}</span>{" "}
            </p>
          </div>{" "}
        </footer>{" "}
        <div className="status" id="status" aria-live="off">
          {" "}
          <div className="wrap">
            {" "}
            <div className="status-box">
              {" "}
              <span id="status-label">{"Repairing CX"}</span>{" "}
              <span className="seq" id="seq" aria-hidden="true"></span>{" "}
              <span className="cells" id="cells"></span>{" "}
              <span className="status-pct" id="status-pct">
                {"0%"}
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
