import { Fragment } from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import LazyImage from "../lazy-image";
import { ga, skeleton } from "../../utils";
import { SanitizedExternalProject } from "../../interfaces/sanitized-config";

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
  googleAnalyticId,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        widthCls: "w-32",
                        heightCls: "h-8",
                        className: "mb-2 mx-auto",
                      })}
                    </h2>
                    <div className="avatar w-full h-full">
                      <div className="w-24 h-24 mask mask-squircle mx-auto">
                        {skeleton({
                          widthCls: "w-full",
                          heightCls: "h-full",
                          shape: "",
                        })}
                      </div>
                    </div>
                    <div className="mt-2">
                      {skeleton({
                        widthCls: "w-full",
                        heightCls: "h-4",
                        className: "mx-auto",
                      })}
                    </div>
                    <div className="mt-2 flex items-center flex-wrap justify-center">
                      {skeleton({
                        widthCls: "w-full",
                        heightCls: "h-4",
                        className: "mx-auto",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderExternalProjects = () => {
    return externalProjects.map((item) => (
      <article
        id={`project-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        key={item.title}
        className="card shadow-lg compact bg-base-100 col-span-1 min-w-0"
      >
        <div className="p-8 h-full w-full flex flex-col items-center">
          <a
            href={item.link || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            onClick={() => {
              if (googleAnalyticId && item.link) {
                ga.event("Click External Project", { post: item.title });
              }
            }}
          >
            <h2 className="font-medium text-base-content opacity-80 mb-2">
              {item.title}
            </h2>
            {item.imageUrl && (
              <div className="avatar opacity-90">
                <div className="w-24 h-24 mask mask-squircle">
                  <LazyImage
                    src={item.imageUrl}
                    alt={`${item.title} preview`}
                    placeholder={skeleton({
                      widthCls: "w-full",
                      heightCls: "h-full",
                      shape: "",
                    })}
                  />
                </div>
              </div>
            )}
            <p className="mt-3 text-base-content text-opacity-60 text-sm leading-relaxed text-left">
              {item.description}
            </p>
          </a>
          {item.githubUrl && (
            <div className="mt-auto pt-4 flex flex-wrap justify-center gap-3">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm min-h-11"
                aria-label={`Open ${item.title} live demo in a new tab`}
              >
                Live demo <FiArrowUpRight aria-hidden="true" />
              </a>
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm min-h-11"
                aria-label={`View ${item.title} source on GitHub in a new tab`}
              >
                <FiGithub aria-hidden="true" /> GitHub
              </a>
            </div>
          )}
        </div>
      </article>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: "w-40", heightCls: "h-8" })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {header}
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? renderSkeleton() : renderExternalProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExternalProjectCard;
