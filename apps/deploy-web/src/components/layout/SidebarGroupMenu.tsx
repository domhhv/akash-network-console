"use client";
import type { ReactNode } from "react";
import { Separator } from "@akashnetwork/ui/components";
import { cn } from "@akashnetwork/ui/utils";

import type { ISidebarGroupMenu } from "@src/types";
import { SidebarGroupMenuPopover } from "./SidebarGroupMenuPopover";
import { SidebarRouteButton } from "./SidebarRouteButton";

type Props = {
  children?: ReactNode;
  hasDivider?: boolean;
  isNavOpen: boolean;
  group: ISidebarGroupMenu;
};

export const SidebarGroupMenu: React.FunctionComponent<Props> = ({ group, hasDivider = true, isNavOpen }) => {
  return (
    <div className="mt-4 w-full">
      {hasDivider && <Separator className="mb-2" />}

      <nav className={cn("flex flex-1 flex-col", { ["items-center"]: !isNavOpen })} aria-label="Sidebar">
        <ul role="list" className="space-y-1">
          {!!group.title && isNavOpen && (
            <li>
              <span className="text-sm font-light">{group.title}</span>
            </li>
          )}

          {group.routes.map(route => {
            return !route.hoveredRoutes ? (
              <SidebarRouteButton key={route.title} route={route} isNavOpen={isNavOpen} />
            ) : (
              <SidebarGroupMenuPopover key={route.title} route={route} isNavOpen={isNavOpen} />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
