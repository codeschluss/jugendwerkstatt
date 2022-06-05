import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { twClsx } from "../../../../utils";
import { SidebarItemChildrensProps } from "./SidebarItemChildrens.props";

export const SidebarItemChildrens: FC<SidebarItemChildrensProps> = ({
  baseUrl,
  show,
  items,
  ...rest
}): ReactElement | null => {
  if (!show) return null;

  return (
    <>
      <ul {...rest}>
        {items.map(({ href, name, childrens }) => {
          return !!childrens ? (
            <>
              <li
                key={`${href}-${name}`}
                className="flex items-center mb-8 text-white opacity-50 hover:opacity-100"
              >
                {name}
              </li>
              <SidebarItemChildrens
                className="ml-[33px]"
                show={!!childrens}
                baseUrl={href ?? ""}
                items={childrens}
              />
            </>
          ) : (
            <NavLink
              key={`${href}-${name}`}
              to={`${baseUrl}${href ? `/${href}` : ""}`}
              end
            >
              {({ isActive }) => (
                <li
                  className={twClsx(
                    "flex items-center mb-8 text-white opacity-50 hover:opacity-100",
                    isActive && "opacity-1"
                  )}
                >
                  {name}
                </li>
              )}
            </NavLink>
          );
        })}
      </ul>
    </>
  );
};