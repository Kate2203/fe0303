// Начальник цеха пригласил людей на совещание
// Каждый, кто входит в кабинет пожимает руки всем присутствующим
// Сколько человек зашло в кабинет, если известно, что всего произошло 120 рукопожатий.

let man_count=1, hand=0;
while (hand !=120)
{ 
  man_count +=1;  // man_count= man_count+1
  hand +=(man_count-1);
}

alert('В кабинет зашло '+man_count+' человек');
