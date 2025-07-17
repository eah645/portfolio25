const vue_app = Vue.createApp({
    created() {
      fetch("JSON/Web.json")
        .then((response) => response.json())
        .then((json) => {
          this.websites = json;
        });
        console.log('yes')
      // web1(i) {
      //   if (websites[i].year == 1) {
      //     return websites1.values();
      //   }
      // };
    },
    data() {
      return {
        websites: [],
        title: "All Projects",
      };
    },
    methods: {
      //It's defined now :) ...no the function still doesn't work it's only showing up as false so there's an issue with the condition in the if statement?
      //THIS WORKS!!!!! LETS FUCKING GO!!!!! (...yes I yelled it out loud and that was satisfying as hell)
      //Holy shit it actually does work I just need to make the columns respond to this... how
      //Wait ok so- why do I even need this
      makeNewRow(i) {
        if ((i + 1) % 4 == 0) {
          console.log("true");
          $("#content").append("</div><div class='row'>");
        } else {
          console.log("false");
        }
      },
      //https://stackoverflow.com/questions/45724291/using-bootstrap-and-java-script-how-do-i-insert-several-columns-in-a-row-using-f
      //Slightly off topic but I want to have like- could I use case / break thing to call different objects based on year using .filter() ? This might just be an art thing since it might actually be cooler in web to just do them all together so you can see how it evolved
      //I think for now I'm gonna... uh... here I'll make it in separate json files for now and see if I can transition it in because idk how to use filter
    },
  });
  
  vue_app.mount("#vue_app");