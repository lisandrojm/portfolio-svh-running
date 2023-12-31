// src/app/_components/_icons/BgIcons.tsx

import React from 'react';
import PropTypes from 'prop-types';
import { FaHtml5, FaGithub, FaGit, FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandNextjs, TbBrandVercel } from 'react-icons/tb';
import { SiTailwindcss, SiExpress, SiNestjs, SiTypescript, SiMongodb, SiNeovim, SiVisualstudiocode, SiRailway } from 'react-icons/si';

type IconsProps = {
  kind: keyof typeof components;
  size?: number;
};

const components = {
  html: FaHtml5,
  github: FaGithub,
  git: FaGit,
  react: FaReact,
  nodejs: FaNodeJs,
  bootstrap: FaBootstrap,
  js: IoLogoJavascript,
  nextjs: TbBrandNextjs,
  vercel: TbBrandVercel,
  tailwind: SiTailwindcss,
  express: SiExpress,
  nestjs: SiNestjs,
  ts: SiTypescript,
  mongodb: SiMongodb,
  neovim: SiNeovim,
  vscode: SiVisualstudiocode,
  railway: SiRailway,
};

const BgIcons: React.FC<IconsProps> = ({ kind, size = 2 }) => {
  const IconComponent = components[kind];

  return (
    <span className={`text-orange text-${size}xl opacity-25`}>
      <IconComponent />
    </span>
  );
};

BgIcons.propTypes = {
  kind: PropTypes.oneOf(Object.keys(components) as (keyof typeof components)[]).isRequired,
  size: PropTypes.number,
};

export default BgIcons;
