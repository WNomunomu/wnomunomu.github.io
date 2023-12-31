import { FC } from 'react';
import { MutableRefObject } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

type SkillCardProps = {
  title?: string
  icon?: string
}

type SkillSetProps = {
  mySkillSetRef: MutableRefObject<HTMLDivElement | null>
}

const skillSet = [
  {
    type: 'language',
    title: 'HTML',
    icon: 'devicon-html5-plain colored',
  },
  {
    type: 'language',
    title: 'CSS',
    icon: 'devicon-css3-plain colored',
  },
  {
    type: 'language',
    title: 'JavaScript',
    icon: 'devicon-javascript-plain colored',
  },
  {
    type: 'language',
    title: 'TypeScript',
    icon: 'devicon-typescript-plain colored',
  },
  {
    type: 'language',
    title: 'Python',
    icon: 'devicon-python-plain colored',
  },
  {
    type: 'language',
    title: 'MySQL',
    icon: 'devicon-mysql-plain colored',
  },
  {
    type: 'framework-library',
    title: 'React',
    icon: 'devicon-react-original colored'
  },
  {
    type: 'framework-library',
    title: 'Next.js',
    icon: 'devicon-nextjs-original-wordmark colored'
  },
  {
    type: 'framework-library',
    title: 'express',
    icon: 'devicon-express-original'
  },
  {
    type: 'framework-library',
    title: 'django',
    icon: 'devicon-django-plain colored'
  },
  {
    type: 'others',
    title: 'Git',
    icon: 'devicon-git-plain colored'
  },
  {
    type: 'others',
    title: 'Linux',
    icon: 'devicon-linux-plain colored'
  },
  {
    type: 'others',
    title: 'Google Cloud',
    icon: 'devicon-googlecloud-plain colored'
  },
]

const SkillCard: FC<SkillCardProps> = (props) => {
  const { title, icon } = props;

  return (
    <div className="col-lg-2 col-sm-3 col-3 p-3">
      <i className={`${icon}`} style={{ fontSize: '70px' }} />
      <div className="fs-5">{title}</div>
    </div>
  );

};

export const MySkillSet: FC<SkillSetProps> = (props) => {

  const { mySkillSetRef } = props;

  return (
    <div
      className="text-center py-5 bg-body-secondary d-flex align-items-center justify-content-center"
      ref={mySkillSetRef}
    >
      <div className="mx-auto" style={{ width: '70%' }}>
        <div className="fs-1 fw-bold">My skill set</div>
        <div className="fs-5">実際に開発に使用したことのある技術をまとめてみました。</div>
        <div className="pt-3">
          <div className="fs-5">Language</div>
          <div className="row d-flex justify-content-center">
            {skillSet.map((skill, index) => (
              skill.type === 'language' &&
              <SkillCard
                key={index}
                title={skill.title}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
        <div className="pt-3">
          <div className="fs-5">Framework / Library</div>
          <div className="row d-flex justify-content-center">
            {skillSet.map((skill, index) => (
              skill.type === 'framework-library' &&
              <SkillCard
                key={index}
                title={skill.title}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
        <div className="pt-3">
          <div className="fs-5">Others</div>
          <div className="row d-flex justify-content-center">
            {skillSet.map((skill, index) => (
              skill.type === 'others' &&
              <SkillCard
                key={index}
                title={skill.title}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
