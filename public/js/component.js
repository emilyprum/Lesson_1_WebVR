AFRAME.registerComponent("test-component",{

    schema: {
        message:{type: 'string', default: "no message"},
        name:{type: 'string', default: ""}
    },

    init: function () 
    {
        console.log(this.data.message);
        console.log("my name is " + this.data.name);

    }

});