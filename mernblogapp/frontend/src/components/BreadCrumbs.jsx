import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();

  const pathnames = pathname.split("/").filter((x) => x);

  let breadcrumbPath = "";

  return (
    <div className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathnames.map((name, idx) => {
        breadcrumbPath += `/${name}`;

        const isLast = idx === pathnames.length - 1;
        return isLast ? (
          <span key={idx}>/ {name.slice(0, 12)}</span>
        ) : (
          <span key={idx}>
            /<Link to={breadcrumbPath}>{name.slice(0, 12)}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
