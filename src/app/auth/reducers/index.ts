import { createSelector, createFeatureSelector} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromAuth from './auth.reducer';



export interface State extends fromRoot.State {
    auth: fromAuth.State;
}

export const reducers = {
    auth: fromAuth.reducer
};

export const selectAuth = createFeatureSelector<fromAuth.State>('auth');
export const selectAuthUser = createSelector(selectAuth, fromAuth.getUser);
export const selectAuthenticated = createSelector(selectAuth, fromAuth.getAuthenticated);
export const selectJwt = createSelector(selectAuth, fromAuth.getJwt);
export const selectLoading = createSelector(selectAuth, fromAuth.getLoading);
