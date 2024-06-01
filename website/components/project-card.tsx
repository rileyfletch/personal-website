import React from 'react';

interface ProjectCardProps {
  imageurl: string;
  projectlink: string;
  projectname: string;
  projectdesc: string;
  iconcolor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageurl,
  projectlink,
  projectname,
  projectdesc,
  iconcolor,
}) => {
  return (
    <div className="flex flex-col justify-center mt-8 mr-8 ml-8">
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span
          className={`absolute top-10 z-0 h-20 w-20 rounded-full bg-prussian transition-all duration-300 group-hover:scale-[10]`}
        ></span>
        <div className="relative z-10 mx-auto max-w-md">
          <div className="flex flex-row items-center">
            <span className={`grid h-20 w-20 place-items-center rounded-full ${iconcolor} transition-all duration-300 group-hover:bg-prussian`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z" fill="currentColor" /><path d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z" fill="currentColor" /><path d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z" fill="currentColor" /></svg>
            </span>
            <div className="text-prussian transition-all duration-300 group-hover:text-white/90">
              <p className="font-bold text-3xl pl-10">{projectname}</p>
            </div>
          </div>
          <div className="space-y-6 pt-5 text-base leading-7 text-prussian transition-all duration-300 group-hover:text-white/90">
            <p>{projectdesc}</p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a
                href={projectlink}
                className="text-prussian transition-all duration-300 group-hover:text-white"
              >
                Check it out on GitHub &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;