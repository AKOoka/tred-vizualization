# cjs-vizualization

## FAQ(ЧаВо)
- **Зачем создаётся это приложение?**  
    Это приложение является тренеровочным проектом для улучшения навыков программирования.

- **Что это за проект?**  
    Это профайлер, который отображает работу задач внутри многопоточного движка. Отображаемые данные собираются с точностью до микросекунд.

- **Как интерпретировать этот график?**  
    ![картинка приложения](/cjsvizC.png)  
    Каждая строка профайлера отображает задачи (их стартовое время и длительность исполнения) соответствующего ядра.

- **Какая цель приложения?**  
    Этот проект является инструментом для разработки и отладки програмного обеспечения, использующий cjs.

- **Что значит cjs в названии?**  
    Аббревиатура concurrent job system (система параллельных задач).

- **Что значит система параллельных задач в нашем проекте?**  
    Эта низкоуровневая система, которая используется для максимального использования вычислитеньных ресурсов,
    конкретнее каждого ядра в CPU, также система решает проблему синхонизации между задачами.

- **Что за движок?**  
    На данный момент он находится в разработке и закрытом доступе. Подробнее про его реализацию и функционал можете узнать в 
    "[Parallelizing the Naughty Dog engine using fibers](http://twvideo01.ubm-us.net/o1/vault/gdc2015/presentations/Gyrling_Christian_Parallelizing_The_Naughty.pdf)".
.
- **А почему ему не работать в реальном времени?**  
    Данные могут собираться в точности до микросекунд в течении нескольких секунд и для разработки важен именно снимок исполнения параллельных задач.
    Так как данных очень много и не требуется функционала сборки данных в реальном времени этот функционал не будет реализован.

- **Какие технологии используются в этом проекте?**  
    Для улучшения производительности используется WebGL в обёртке [PixiJS](https://www.pixijs.com/).
    Остальное является собственной разработкой без использования сторонних библиотек/фреймворков.
