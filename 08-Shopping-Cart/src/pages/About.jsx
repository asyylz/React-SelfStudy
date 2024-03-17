import { FaLinkedin } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import classes from "./About.module.css";
export default function About() {
  return (
    // <div className={classes.container}>
    //   <h1>About</h1>
    //   <div className={classes.icons}>
    //     <div className={classes.iconBox}>
    //       <FaLinkedin />
    //     </div>
    //     <div className={classes.iconBox}>
    //       <BsInstagram />
    //     </div>
    //     <div className={classes.iconBox}>
    //       <FaGithub />
    //     </div>
    //   </div>
    // </div>
    <div class={classes.blog}>
      <div class={classes.titleBox}>
        <h2>Asiye Yaliz</h2>
        <hr />
        <div class={classes.intro}>Software Developer</div>
        <hr />
      </div>
      <div class={classes.iconsHolder}>
        <div className={classes.iconHolder}>
          <a
            className={classes.iconBox}
            href="https://linkedin.com/in/asiye-yaliz-8b834922b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={classes.icon} />
          </a>
        </div>
        <div className={classes.iconHolder}>
          <a
            className={classes.iconBox}
            href="https://github.com/asyylz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={classes.icon} />
          </a>
        </div>
        <div className={classes.iconHolder}>
          <a
            className={classes.iconBox}
            href="https://www.instagram.com/asyylzz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className={classes.icon} />
          </a>
        </div>
      </div>
      <div class={classes.info}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </span>
      </div>
      <>
        <div class={classes.colorOverlay}></div>
        <div class={classes.footer}></div>
      </>
    </div>
  );
}
