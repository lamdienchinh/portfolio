import expo from '@/assets/icons/expo-icon.svg';
import git from '@/assets/icons/git-icon.png';
import graphql from '@/assets/icons/graphql-icon.png';
import js from '@/assets/icons/javascript-icon.png';
import nextjs from '@/assets/icons/nextjs-icon.png';
import nodejs from '@/assets/icons/nodejs-icon.png';
import react from '@/assets/icons/react-icon.png';
import redux from '@/assets/icons/redux.png';
import tailwind from '@/assets/icons/tailwind-icon.png';
import ts from '@/assets/icons/typescript-icon.png';
import vscode from '@/assets/icons/vscode-icon.png';
import { Marquee } from '@/components/ui/marquee';
import Image from 'next/image';

const skills = [
  { label: 'React', icon: react },
  { label: 'Redux', icon: redux },
  { label: 'VSCode', icon: vscode },
  { label: 'JavaScript', icon: js },
  { label: 'TypeScript', icon: ts },
  { label: 'Tailwind CSS', icon: tailwind },
  { label: 'Next.js', icon: nextjs },
  { label: 'Node.js', icon: nodejs },
  { label: 'Expo', icon: expo },
  { label: 'Git', icon: git },
  { label: 'GraphQL', icon: graphql },
];

export default function Skill() {
  return (
    <Marquee>
      {skills.map(skill => (
        <div className="flex items-center gap-2 px-4 text-xl">
          <div className="dark:bg-gray-400 rounded-full p-2">
            <Image src={skill.icon} alt={skill.label} className="h-10 w-10" />
          </div>
          <span>{skill.label}</span>
        </div>
      ))}
    </Marquee>
  );
}
