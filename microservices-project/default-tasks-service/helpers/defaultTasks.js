import {setHours, startOfTomorrow, setMinutes, format} from 'date-fns';

export default 
[
    {
        ST_TASK_TAS: 'Acordar',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 5), 30), "dd'/'MM'/'yyy HH':'mm")
    }, {
        ST_TASK_TAS: 'Arrumar a casa',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 6), 0), "dd'/'MM'/'yyy HH':'mm")
    }, {
        ST_TASK_TAS: 'Tomar café da manhã',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 6), 30), "dd'/'MM'/'yyy HH':'mm")
    }, {
        ST_TASK_TAS: 'Tomar Banho',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 7), 0), "dd'/'MM'/'yyy HH':'mm")
    },{
        ST_TASK_TAS: 'Cuidar da pele',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 7), 30), "dd'/'MM'/'yyy HH':'mm")
    },{
        ST_TASK_TAS: 'Colocar a roupa',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 8), 0), "dd'/'MM'/'yyy HH':'mm")
    }, {
        ST_TASK_TAS: 'Escovar os dentes',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 8), 30), "dd'/'MM'/'yyy HH':'mm")
    }, {
        ST_TASK_TAS: 'Arrumar o cabelo',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 8), 35), "dd'/'MM'/'yyy HH':'mm")
    },{
        ST_TASK_TAS: 'Sair',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 9), 0), "dd'/'MM'/'yyy HH':'mm")
    }, {
        ST_TASK_TAS: 'Almoçar',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 12), 0), "dd'/'MM'/'yyy HH':'mm")
    }, {
        ST_TASK_TAS: 'Colocar o uniforme',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 12), 30), "dd'/'MM'/'yyy HH':'mm")
    }, {
        ST_TASK_TAS: 'Colocar a mochila',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 12), 40), "dd'/'MM'/'yyy HH':'mm")
    },{
        ST_TASK_TAS: 'Escovar os dentes',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 12), 45), "dd'/'MM'/'yyy HH':'mm")
    }, {
        ST_TASK_TAS: 'Ir pra escola',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 13), 50), "dd'/'MM'/'yyy HH':'mm")
    }, {
        ST_TASK_TAS: 'Voltar pra casa',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 17), 30), "dd'/'MM'/'yyy HH':'mm")
    }, {
        ST_TASK_TAS: 'Jantar',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 18), 0), "dd'/'MM'/'yyy HH':'mm")
    },{
        ST_TASK_TAS: 'Tomar Banho',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 19), 30), "dd'/'MM'/'yyy HH':'mm")
    },{
        ST_TASK_TAS: 'Escovar os dentes',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 20), 30), "dd'/'MM'/'yyy HH':'mm")
    },{
        ST_TASK_TAS: 'Dormir',
        DT_TASK_TAS: format(setMinutes(setHours(startOfTomorrow(), 22), 0), "dd'/'MM'/'yyy HH':'mm")
    }
]