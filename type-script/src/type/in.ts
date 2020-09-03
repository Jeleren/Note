// in 可以遍历

interface Admin {
    name: string;
    privileges: string[];
}

interface Employee {
    name: string;
    startDate: Date;
}

type UnknowEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknowEmployee) {
    console.log("Name:", emp.name)
    if("privileges" in emp) { // 如果emp中包含previleges属性
        console.log("Privileges:", emp.privileges)
    }
    if("startDate" in emp) {
        console.log("StartDate:", emp.startDate)
    }
}

const people: Admin = {
    name: 'asd',
    privileges: ['admin']
}

printEmployeeInformation(people)
  
   