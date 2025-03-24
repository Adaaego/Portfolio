export const PageAnimation ={
    hidden: {
        opacity: 0,
        y: 300,
      },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          when: "beforeChildren",
          staggerChildren: 0.5,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      },
    };

    export const titleAnim ={
      hidden:{
        opacity : 0,
        y : 200
      },
      show :{
        opacity : 1,
        y: 0,
        transition: { duration: 0.75, ease: "easeOut" },
      }
    };
    
    export const fade ={
      hidden: {
        opacity : 0,
      },

      show: {
        opacity: 1,
        transition: { ease: "easeOut", duration: 1},
      }
    };
    export const photoAnim = {
      hidden: { scale: 0, opacity: 0 },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          ease: "easeOut",
          duration: 1,
        },
      },
    };