import React from "react"
import Project from "./project"
import { arrayOf, shape, ProjectType } from "../../types"
import ProjectIcon from "./project-icon"
import ProjectStatus from "./project-status"
import ProjectTags from "./project-tags"
import ProjectImg from "./project-image"
// import Img from "gatsby-image"

const Projects = ({ projects }) => {
  const ascent = "images/AscentHomeLarge.png"
  const spoofify = "images/SpoofifyImage.jpg"
  const watchtube = "images/watchtube2.png"
  const methodize = "images/Methodize.png"

  return (
    <>
      <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
        Projects
      </h5>
      {projects.map((project, i) => (
        <Project key={`${project.name}_${i}`} {...project} />
      ))}

      {/* Methodize  */}
      <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {methodize && (
          <div
            className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0"
            style={{ width: 450 }}
          >
            <ProjectImg
              alt="Methodize"
              filename="Methodize.png"
              style={{ height: 350 }}
            />
          </div>
        )}
        <div className="lg:flex-1">
          <h4 className="font-bold">{"Methodize"}</h4>
          {"https://github.com/ctran01/Methodic" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={"https://github.com/ctran01/Methodic"}
              rel="noreferrer noopener"
              target="_blank"
            >
              github
            </a>
          )}
          <span>&nbsp;&nbsp;</span>
          {"https://methodize-app.com/" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={"https://www.methodize-app.com/"}
              rel="noreferrer noopener"
              target="_blank"
            >
              live
            </a>
          )}
          <p className="w-full py-4 whitespace-pre-line">
            {
              "Methodize is a project management tool based off Asana/Trello where users can keep track of teams, projects, and tasks. Methodize was developed using NodeJS, Express, and React."
            }
          </p>
          <ul className="pr-2">
            {"Live" && <ProjectStatus status={"Live"} />}
            {["NodeJS", "JavaScript", "React", "Express", "PostgreSQL"] && (
              <ProjectTags
                tags={[
                  "NodeJS",
                  "JavaScript",
                  "React",
                  "Express",
                  "PostgreSQL",
                ]}
              />
            )}
          </ul>

          {"website" && <ProjectIcon icon={"website"} />}
        </div>
      </div>

      {/* Ascent Project */}
      <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {ascent && (
          <div className="w-full pb-4 lg:w-1/3 lg:pr-8 lg:pb-0">
            <ProjectImg alt="Ascent" filename="AscentHomeLarge.png" />
          </div>
        )}
        <div className="lg:flex-1">
          <h4 className="font-bold">{"Ascent"}</h4>
          {"https://github.com/ctran01/Ascent" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={"https://github.com/ctran01/Ascent"}
              rel="noreferrer noopener"
              target="_blank"
            >
              github
            </a>
          )}
          <span>&nbsp;&nbsp;</span>
          {"https://appetize.io/app/yjmh15xyn699qbtz6k3d4yg61m?device=iphone11promax&scale=75&orientation=portrait&osVersion=13.3" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={
                "https://appetize.io/app/yjmh15xyn699qbtz6k3d4yg61m?device=iphone11promax&scale=75&orientation=portrait&osVersion=13.3"
              }
              rel="noreferrer noopener"
              target="_blank"
            >
              live
            </a>
          )}
          <p className="w-full py-4 whitespace-pre-line">
            {
              "Ascent is a mobile application written with React Native and Sequelize/Express. This app allows users to create climbing areas and routes around the world as well as show nearby climbing areas and routes around the user."
            }
          </p>
          <ul className="pr-2">
            {"Live" && <ProjectStatus status={"Live"} />}
            {[
              "NodeJS",
              "JavaScript",
              "React Native",
              "React",
              "SequelizeORM",
              "Express",
              "PostgreSQL",
            ] && (
              <ProjectTags
                tags={[
                  "NodeJS",
                  "JavaScript",
                  "React Native",
                  "React",
                  "SequelizeORM",
                  "Express",
                  "PostgreSQL",
                ]}
              />
            )}
          </ul>

          {"website" && <ProjectIcon icon={"website"} />}
        </div>
      </div>

      {/* Spoofify  */}
      <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {spoofify && (
          <div
            className="w-full pb-4 lg:w-3/5 lg:pr-8 lg:pb-0"
            style={{ width: 450 }}
          >
            <ProjectImg
              alt="Spoofify"
              filename="SpoofifyImage.jpg"
              style={{ height: 350 }}
            />
          </div>
        )}
        <div className="lg:flex-1">
          <h4 className="font-bold">{"Spoofify"}</h4>
          {"https://github.com/ctran01/Spoofify" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={"https://github.com/ctran01/Spoofify"}
              rel="noreferrer noopener"
              target="_blank"
            >
              github
            </a>
          )}
          <span>&nbsp;&nbsp;</span>
          {"https://spotify-clone-aa-react.herokuapp.com/" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={"https://spotify-clone-aa-react.herokuapp.com/"}
              rel="noreferrer noopener"
              target="_blank"
            >
              live
            </a>
          )}
          <p className="w-full py-4 whitespace-pre-line">
            {
              "Spoofify is a spotify clone written in ReactJS and flask-SQLAlchemy that I created with a group. It allows users to search from a library of artists and play music as well as create playlists."
            }
          </p>
          <ul className="pr-2">
            {"Live" && <ProjectStatus status={"Live"} />}
            {[
              "JavaScript",
              "React",
              "Flask/SQLAlchemy",
              "Python",
              "PostgreSQL",
            ] && (
              <ProjectTags
                tags={[
                  "JavaScript",
                  "React",
                  "Flask/SQLAlchemy",
                  "Python",
                  "PostgreSQL",
                ]}
              />
            )}
          </ul>

          {"website" && <ProjectIcon icon={"website"} />}
        </div>
      </div>

      {/* WatchTube  */}
      <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
        {watchtube && (
          <div
            className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0"
            style={{ width: 450 }}
          >
            <ProjectImg
              alt="Watchtube"
              filename="watchtube2.png"
              style={{ height: 350 }}
            />
          </div>
        )}
        <div className="lg:flex-1">
          <h4 className="font-bold">{"WatchTube"}</h4>
          {"https://github.com/ctran01/WatchTube" && (
            <a
              className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
              href={"https://github.com/ctran01/Watchtube"}
              rel="noreferrer noopener"
              target="_blank"
            >
              github
            </a>
          )}
          {/* <span>&nbsp;&nbsp;</span>
        {'https://watchtube-app.herokuapp.com/' && (
          <a
            className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
            href={'https://watchtube-app.herokuapp.com/'}
            rel="noreferrer noopener"
            target="_blank"
          >
             live
          </a>
        )} */}
          <p className="w-full py-4 whitespace-pre-line">
            {
              "WatchTube is a YouTube clone written in ReactJS and Express. It allows users to search and play videos, add them to playlists, and comment on videos."
            }
          </p>
          <ul className="pr-2">
            {"On Pause" && <ProjectStatus status={"On Pause"} />}
            {[
              "NodeJS",
              "JavaScript",
              "React",
              "SequelizeORM",
              "Express",
              "PostgreSQL",
            ] && (
              <ProjectTags
                tags={[
                  "NodeJS",
                  "JavaScript",
                  "React",
                  "SequelizeORM",
                  "Express",
                  "PostgreSQL",
                ]}
              />
            )}
          </ul>

          {"website" && <ProjectIcon icon={"website"} />}
        </div>
      </div>
    </>
  )
}
Projects.propTypes = {
  projects: arrayOf(shape(ProjectType)),
}

export default Projects
