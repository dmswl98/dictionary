import NotFound from "../../assets/images/svg-notfound";
import classes from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={classes["not-found"]}>
      <div className={classes.svg}>
        <NotFound />
      </div>
    </div>
  );
};

export default NotFoundPage;
