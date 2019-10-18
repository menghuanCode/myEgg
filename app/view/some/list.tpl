<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>some</title>
</head>
<body>
    <ul class="some-view view">
        {% for item in list %} 
            <li class="item">
                <a href="">{{ item }}</a>
            </li>
        {% endfor %}
    </ul>
</body>
</html>