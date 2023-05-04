import { IBreadcrumb } from "./Breadcrumb.interface";
import "./Breadcrumb.scss";

export const Breadcrumb = ({ pathsFromRoot }: IBreadcrumb) => {
  return (
    <ul className="category-breadcrumb">
      {pathsFromRoot?.map((category, index) => (
        <li key={category.id}>
          <span>{category.name}</span>
          {index !== pathsFromRoot.length - 1 && <span>{" >"}</span>}
        </li>
      ))}
    </ul>
  );
};
