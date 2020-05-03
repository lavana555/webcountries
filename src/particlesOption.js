import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));






export const particlesOption = {
    particles: {
        number: {
            value: 155,
            density: {
                enable: true,
                value_area: 600
            }
        },
        line_linked: { /* связующие линии */
            "enable": true, /* включено/выключено */
            "distance": 150, /* расстояние между частицами, при котором проявляется линия */
            "color": "#646464", /* цвет */
            "opacity": 0.6, /* прозрачность */
            "width": 0.8 /* ширина */
        },
    },
    interactivity: { /* интерактивность */
        detect_on: "canvas", /* реакция на событие мыши в окне (window) или в объекте (canvas) */
        /* события */
        events: {
            "onhover": { /* по наведению */
                "enable": true, /* включено/выключено */
                "mode": "repulse" /* repulse (отталкивание частиц), grab (соединение связующих линий), bubble ('пузырение' частиц) */
            },
            "onclick": { /* по клику */
                "enable": true, /* включено/выключено */
                "mode": "push" /* push (добавление новых частиц), remove (удаление частиц),
                     bubble (временное изменение прозрачности частиц на непрозрачное и увеличение их в размере), repulse (отталкивание частиц) */
            }
        },

        "modes": { /* параметры видов событий */
            "bubble": { /* при onhover или onclick: mode: bubble */
                "distance": 100, /* расстояние от мышки до частиц, при котором происходит эффект */
                "size": 40, /* размер увеличения частиц */
                "duration": 2, /* продолжительность эффекта в секундах при клике */
                "opacity": 0.2, /* максимальная прозрачность */
                "speed": 20 /* скорость эффекта */
            },
            "repulse": { /* при onhover или onclick: mode: repulse */
                "distance": 80, /* расстояние отталкивания */
                "duration": 1 /* продолжительность отталкивания */
            },
            "push": { /* при onclick: mode: push */
                "particles_nb": 4 /* количество добавляемых частиц */
            },
        }

    }

};
