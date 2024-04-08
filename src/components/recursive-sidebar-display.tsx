/* eslint-disable @typescript-eslint/no-explicit-any */
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import React from "react";
import { useState } from "react";
import { NavLink, matchPath, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type RecursiveSidebarDisplayProps = {
  sidebarPages: { [key: string]: any }[];
  style?: string;
  isChild: boolean;
};

const RecursiveSidebarDisplay = ({
  sidebarPages,
  style,
  isChild,
}: RecursiveSidebarDisplayProps) => {
  const location = useLocation();
  const [activeParent, setActiveParent] = useState("");

  const getCurrentPageStyle = (path: string) => {
    return matchPath(path + "/*", location?.pathname)
      ? {
          backgroundColor: "#f2f2f1",
          width: "100%",
          borderRadius: "0px 5px 5px 0px",
        }
      : {};
  };

  const currentPage = (path: string) => {
    return matchPath(path + "/*", location?.pathname);
  };

  return (
    <>
      <div className={twMerge("h-full shadow-md w-full pt-0 ", style)}>
        <ul>
          {sidebarPages.map((page) => {
            if (page?.children) {
              return (
                <>
                  <li
                    style={getCurrentPageStyle(page?.path)}
                    className="hover:text-orange pl-[31px] py-[8px] text-13 mb-[20px]"
                  >
                    <NavLink
                      to={page.path}
                      className={
                        currentPage(page?.path)
                          ? "hover:text-orange text-orange flex items-center gap-[8px]"
                          : "hover:text-orange text-grey flex items-center gap-[8px]"
                      }
                      onClick={(event) => {
                        event.preventDefault();
                        // if (page.path === "/logout") {
                        //   setActiveParent("/");
                        // }
                        if (page.path === activeParent) {
                          setActiveParent("");
                        } else {
                          setActiveParent(page?.path);
                        }
                      }}
                    >
                      <img
                        src={
                          currentPage(page?.path)
                            ? page?.activeIcon
                            : page?.icon
                        }
                      />
                      <p
                        className={
                          currentPage(page?.path)
                            ? "text-orange pr-12"
                            : "pr-12"
                        }
                      >
                        {page.name}
                      </p>
                      {page.path === activeParent ? (
                        <CaretUpOutlined />
                      ) : (
                        <CaretDownOutlined />
                      )}
                    </NavLink>
                  </li>
                  {activeParent === page?.path && (
                    <RecursiveSidebarDisplay
                      sidebarPages={page?.children}
                      style="pt-2 pl-5"
                      isChild={true}
                    />
                  )}
                </>
              );
            }
            return (
              <li
                style={!isChild ? getCurrentPageStyle(page?.path) : {}}
                className="hover:text-orange pl-[31px] py-[8px] text-13 mb-[20px]"
              >
                <NavLink
                  to={page.path}
                  className={
                    currentPage(page?.path)
                      ? "hover:text-orange text-orange flex items-center gap-[8px]"
                      : "hover:text-orange text-grey flex items-center gap-[8px]"
                  }
                >
                  {currentPage(page?.path) ? (
                    <img src={page?.activeIcon} />
                  ) : (
                    <img src={page?.icon} />
                  )}
                  <p>{page.name}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default RecursiveSidebarDisplay;
