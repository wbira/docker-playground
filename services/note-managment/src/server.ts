import { PORT, START_MESSAGE } from './environment/config';
import app from './app'


app.listen(PORT, () => { console.log(START_MESSAGE) })

