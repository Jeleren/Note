// in 可以遍历

console.log(Global.obj)

interface Admin {
    type: 'admin';
    name: string;
    privileges: string[];
}

interface Employee {
    type: 'employee';
    name: string;
    startDate: Date;
}

// 联合类型
type UnKnowEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnKnowEmployee) {
    console.log("Name:", emp.name)
    if("privileges" in emp) { // 如果emp中包含previleges属性
        console.log("Privileges:", emp.privileges)
    }
    if("startDate" in emp) {
        console.log("StartDate:", emp.startDate)
    }
}

const people: Admin = {
    type: 'admin',
    name: 'asd',
    privileges: ['admin']
}

printEmployeeInformation(people)

// type a = keyof Admin
// const t : a = {type: 'string'}


// 类型谓词
// function getPrivileges(emp: UnKnowEmployee) {
//     console.log(emp.privileges) // Error: Property 'privileges' does not exist on type 'UnKnowEmployee'.   Property 'privileges' does not exist on type 'Employee'.
// }

// function getPrivileges(emp: UnKnowEmployee) {
//     return (<Admin>emp).privileges !== undefined
// }

function getPrivileges(emp: UnKnowEmployee): emp is Admin {
    return emp.type === 'admin'  // emp 只能取联合类型中相同的参数
}
