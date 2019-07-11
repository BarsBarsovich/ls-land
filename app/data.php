<?
if((isset($_POST['name'])&&$_POST['email']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'authors@loftschool.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения        
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Cсылка на личный сайт, соцсеть или мессенджер: '.$_POST['social']' </p>
                        <p>Область в которой вы эксперт: '.$_POST['oblast']' </p>
                        <p>Каким навыкам вы можете научить: '.$_POST['skills']' </p>
                        <p>Практический опыт у вас есть в этой области: '.$_POST['expirience']' </p>
                        <p>Активность в тематических сообществах: '.$_POST['activity']' </p>
                        <p>Почему вы отлично подходите для LoftTeam?: '.$_POST['lofteam']' </p>
                        <p>Тема вашего будущего курса: '.$_POST['theme']' </p>
                        <p>Ссылка на ваш скринкаст, вебинар или выступление: '.$_POST['you']' </p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <webinar@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>