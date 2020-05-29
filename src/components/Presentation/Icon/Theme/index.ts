import user from "components/Presentation/Icon/Images/user.svg";
import more from "components/Presentation/Icon/Images/more.svg";
import back from "components/Presentation/Icon/Images/back.svg";
import close from "components/Presentation/Icon/Images/close.svg";
import add from "components/Presentation/Icon/Images/add.svg";
import emojiHmm from "components/Presentation/Icon/Images/🤔.svg";

export interface IconTheme {
  user: string;
  more: string;
  back: string;
  close: string;
  add: string;
  emojiHmm: string;
  sizes: {
    s: {
      width: string;
      height: string;
    };
    m: {
      width: string;
      height: string;
    };
    l: {
      width: string;
      height: string;
    };
  };
}

export const Icon: IconTheme = {
  user: user,
  more: more,
  back: back,
  close: close,
  add: add,
  emojiHmm: emojiHmm,
  sizes: {
    s: {
      width: "20px",
      height: "20px",
    },
    m: {
      width: "40px",
      height: "40px",
    },
    l: {
      width: "88px",
      height: "88px",
    },
  },
};
