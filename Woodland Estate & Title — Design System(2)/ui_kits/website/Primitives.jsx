/* global React */
const { useEffect, useRef, useState } = React;

const ArrowRight = () => (
  <svg viewBox="0 0 56 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="56" height="20">
    <path d="M2 10 H50" />
    <path d="M42 3 L50 10 L42 17" />
  </svg>
);

const Btn = ({ variant = 'primary', rounded, dark, children, onClick }) => {
  const cls = `btn btn-${variant}${rounded ? ' btn-rounded' : ''}${dark ? ' dark' : ''}`;
  return <a className={cls} onClick={onClick}>{children}</a>;
};

const SectionTag = ({ children }) => <span className="section-tag">{children}</span>;

Object.assign(window, { ArrowRight, Btn, SectionTag });
