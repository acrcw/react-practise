// useEffect 1 works like componentdidmount() and componentDidUpdate()
  useEffect(() => {
    // useEffect 1
    console.log(
      "🐧 useEffect 1 called when component mounts or when component rerenders"
    );
  });

  // useEffect 2  works like componentdidmount() and componentwillunmount()
  useEffect(() => {
    console.log(" 🐔 useEffect 2 called when component mounts only");
    return () => {
      // also called clean up code
      console.log(" 🐔 useEffect 2 called when component unmounts");
    };
  }, []);

  // useEffect 3 works like componentdidupdate
  // this useEffect will fire on intial mount and when state specified in dependecy changes below is the reson
  // https://stackoverflow.com/questions/70917313/why-does-useeffect-hook-with-its-dependencies-run-after-first-component-render
  useEffect(() => {
    console.log(" 👻 useEffect 3 called only when state updates");
  }, [count]);
