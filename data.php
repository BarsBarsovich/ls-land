<?
if((isset($_POST['name'])&&$_POST['email']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'webinar@loftschool.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения        
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Email: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <webinar@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>

<!-- 
<form action="data.php" method="POST">
            <div class="modal__input-container">
              <input type="text" class="modal__input-input" placeholder="ФИО" required name="name"><br />
              <input type="text" class="modal__input-input" placeholder="Email" required name="email"><br />
              <input type="text" class="modal__input-input"
                placeholder="Cсылка на личный сайт, соцсеть или мессенджер" required name="social"><br />
              <input type="text" class="modal__input-input" placeholder="Область в которой вы эксперт" required name="oblast"><br />
              <input type="text" class="modal__input-input" placeholder="Каким навыкам вы можете научить?" required name="skills"><br />
              <input type="text" class="modal__input-input"
                placeholder="Какой практический опыт у вас есть в этой области?" required name="expirience"><br />
              <input type="text" class="modal__input-input"
                placeholder="Какая у вас активность в тематических сообществах?" required name="activity"><br />
              <input type="text" class="modal__input-input"
                placeholder="Почему вы отлично подходите для LoftTeam?" required name="lofteam"><br />
              <input type="text" class="modal__input-input" placeholder="Тема вашего будущего курса" required name="theme"><br />
              <input type="text" class="modal__input-input"
                placeholder="Ссылка на ваш скринкаст, вебинар или выступление" required name="you">
            </div>
            <div class="modal__btn-container">
              <button type="submit" class="button">Отправить</button>
            </div>
          </form> -->