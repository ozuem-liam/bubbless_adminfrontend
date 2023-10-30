import {Action, configureStore, ThunkAction, combineReducers, AnyAction} from "@reduxjs/toolkit"
import AuthReducer from "../slices/AuthSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import EquipmentReducer from "../slices/EquipmentSlice";
import ApplianceReducer from "../slices/ApplianceSlice";
import LoanReducer from "../slices/OrderSlice";
import SitingReducer from "../slices/SitingSlice";
import DashboardReducer from "../slices/DashboardSlice";
import VendorReducer from "../slices/VendorSlice";
import FeedbackReducer from "../slices/FeedbackSlice";




const combinedReducer = combineReducers({
    auth: AuthReducer,
    equipment: EquipmentReducer,
    appliance: ApplianceReducer,
    loan: LoanReducer,
    siting: SitingReducer,
    feeback: FeedbackReducer,
    installer: VendorReducer,
    dashboard: DashboardReducer
})

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      return nextState;
    } else {
      return combinedReducer(state, action);
    }
  };


export const makeStore = () => configureStore({reducer});

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export const wrapper = createWrapper(makeStore, {debug: true})

export { createWrapper };
