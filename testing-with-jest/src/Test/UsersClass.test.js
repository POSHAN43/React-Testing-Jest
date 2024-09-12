import Users from "../TestingComponent/UsersClass";
import renderer from "react-test-renderer"

//Used for class component methods 
test("class method testing",()=>{
    const componentData = renderer.create(<Users/>).getInstance()
    expect(componentData.getUserList()).toMatch("user poshan")
})