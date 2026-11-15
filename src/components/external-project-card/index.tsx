import { Fragment } from "react";
import { FiArrowUpRight, FiGithub, FiCheck } from "react-icons/fi";
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
    return externalProjects.map((item, index) =>
      item.githubUrl ? (
        <article
          id={`project-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          key={item.title}
          className="card compact bg-base-100 shadow-lg md:col-span-2 border border-primary/30"
          aria-labelledby={`project-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`}
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-4">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt=""
                  width={80}
                  height={80}
                  loading="lazy"
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl shrink-0"
                />
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                  Featured · Real-time collaboration
                </p>
                <h2
                  id={`project-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`}
                  className="text-2xl font-bold text-base-content"
                >
                  {item.title}
                </h2>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-base-content opacity-80 max-w-3xl">
              {item.description}
            </p>
            {item.technologies && (
              <ul
                aria-label="Technology stack"
                className="mt-4 flex flex-wrap gap-2"
              >
                {item.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            )}
            {item.metrics && (
              <dl className="mt-6 grid grid-cols-3 gap-2 sm:gap-4 border-y border-base-content/10 py-5">
                {item.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="text-xs text-base-content opacity-70">
                      {metric.label}
                    </dt>
                    <dd className="mt-1 text-2xl sm:text-3xl font-bold text-base-content">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
            {item.highlights && (
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm leading-relaxed text-base-content"
                  >
                    <FiCheck
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-primary"
                    />
                    <span className="opacity-80">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                aria-label={`Open ${item.title} live demo in a new tab`}
              >
                Live demo <FiArrowUpRight aria-hidden="true" />
              </a>
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline min-h-11 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                aria-label={`View ${item.title} source on GitHub in a new tab`}
              >
                <FiGithub aria-hidden="true" /> GitHub
              </a>
            </div>
          </div>
        </article>
      ) : (
        <a
          className={`card shadow-lg compact bg-base-100${item.link ? " cursor-pointer" : ""}`}
          key={index}
          href={item.link || undefined}
          onClick={(e) => {
            e.preventDefault();
            if (!item.link) return;

            try {
              if (googleAnalyticId) {
                ga.event("Click External Project", {
                  post: item.title,
                });
              }
            } catch (error) {
              console.error(error);
            }

            window?.open(item.link, "_blank");
          }}
        >
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col">
              <div className="w-full">
                <div className="px-4">
                  <div className="text-center w-full">
                    <h2 className="font-medium text-center opacity-60 mb-2">
                      {item.title}
                    </h2>
                    {item.imageUrl && (
                      <div className="avatar opacity-90">
                        <div className="w-24 h-24 mask mask-squircle">
                          <LazyImage
                            src={item.imageUrl}
                            alt={"thumbnail"}
                            placeholder={skeleton({
                              widthCls: "w-full",
                              heightCls: "h-full",
                              shape: "",
                            })}
                          />
                        </div>
                      </div>
                    )}
                    <p className="mt-2 text-base-content text-opacity-60 text-sm text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ),
    );
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
