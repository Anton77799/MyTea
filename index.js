// Release 0
student = {}; //Создайте пустой объект student
student.firstName = "Petr";//Добавьте свойство firstName со значением Petr
student.lastName = "Perviy";//Добавьте свойство lastName со значением Perviy
student.firstName = "Petya";//Измените значение свойства firstName на Petya
delete student.firstName;//Удалите свойство firstName из объекта.
// Release 1
let group = [];//Создайте массив group
group.push(student);//Добавьте в него студента из предыдущего задания
group.push(good_student={firstName:"Kostya",lastName:"Vtoroy"},bad_student={firstName:"Lesha",lastName:"Polniy"});//Добавьте в массив еще 2 случайных студентов с заполненными свойствами firstName, lastName.
