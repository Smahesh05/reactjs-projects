import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getCategory } from "../api";

const Category = () => {
  const { catId } = useParams();
  const category = getCategory(catId);
  return (
    <>
      <h2>{category.name}Session</h2>
      <ul className="session-list">
        {category.sessions.map((session) => (
          <li key={session.id} className="session">
            <NavLink
              to={session.id}
              className={({ isActive }) => (isActive ? "session-active" : null)}
            >
              <p className="session-name">{session.name}</p>
              <p>
                {session.speaker.name} | {session.speaker.org}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Category;
