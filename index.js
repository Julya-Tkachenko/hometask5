// За допомогою prompt запитати “ім'я користувача”.
// За допомогою alert вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач
// валідація: ім'я має бути непорожнім. інакше показати помилку або використати [noname]

const userName = prompt('what is your name?');

if (userName === null) {
    alert ('Ok, goodbye');
}
else if (!userName.trim()) {
    alert ('noname');
}
else if (Number(userName)) {
    alert ('You entered a number');
}
 else {
    alert (`Hello, ${userName}! How are you?`);
}
