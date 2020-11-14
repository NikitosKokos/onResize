# onResize -- библиотека для отображения кода, при определенных разрешениях экрана

Чтобы скачать библиотеку, перейдите по пути [onResize / js](./onResize/js/), затем выберите файл _onResize.min.js_ и добавьте его в свой проект (если вы хотите изменить библиотеку, выберите неминифицированную версию кода _onResize.js_)

## Как начать использовать 
Для начала нужно поместить в функцию код, который хотите отображать на определенном разрешении, к примеру, меньше 767 пикселей
```javascript
const codeTabs = () =>{
        console.log(767);
    }
```
### Инициализация
Создаем переменную и присваиваем ей объект
```javascript
const mobileTabs = new OnResize({
        size: 767,
        code: codeTabs,
    });
```
_size и code обязательные параметры_

* __size__ - число, разрешение
* __code__ - функция, с кодом, который нужно выполнить

Теперь этот код отобразится только на экранах меньше 767px, но что если мы хотим поменять с max на min, для этого читайте [следующий раздел](https://github.com/NikitosKokos/onResize/new/master?readme=1#%D0%BD%D0%B5%D0%BE%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B)

#### Необязательные параметры
onMinSize - определяет min и max разрешения
_по умолчанию false_
```javascript
const mobileTabs = new OnResize({
        size: 767,
        code: codeTabs,
        onMinSize: true,
    });
```

heightResize - определяет ширину или высоту
_по-умолчанию false_, если параметр будет true, то вместо max-width будет max-height (точно так же работает и с min значениями)
```javascript
const mobileTabs = new OnResize({
        size: 767,
        code: codeTabs,
        heightResize: true,
    });
```


Если есть вопросы или предложение, то смело пишите

__Автор__ [Никита](https://t.me/nikitakokos)
