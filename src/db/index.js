import mongoose from 'mongoose';
import UserForm from './models/userForm';
import Confession from './models/confession';
import Holymass from './models/holyMass';
import ChurchMember from './models/churchMember';
import Phase from './models/phase';
import Reservation from './models/reservation';
import connectDb from './config';

export { UserForm,Confession,Holymass,ChurchMember,Phase,Reservation, connectDb };
