import { HttpClient } from '@angular/common/http';

import { AppRoutePath } from '@app/enums';
import { BreadcrumbsStep } from '@app/interfaces/helpers';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const TRANSLATIONS_PATH = './assets/i18n/';
const TRANSLATIONS_EXTENSION = '.json';

export const getFormattedCurrentDate = () => getDatePartFromIsoDateString(new Date().toISOString());

export const getDatePartFromIsoDateString = (isoDateString: string) => isoDateString.split('T')[0]

export const parseStringToIntegerNumber = (value: string) => parseInt(value, 10);

export const isValueIntegerNumber = (value: any) => Number.isInteger(value);

export const isInteger = (value: any) => Number.isInteger(value);

export const isNumberNegative = (value: number) => value < 0;

export const getStaticBreadcrumbsStepsByRoutePath = (routePath: AppRoutePath): BreadcrumbsStep[] => {
  return {
    [AppRoutePath.Add]: [ {
      titleTranslationKey: 'BREADCRUMBS.COURSES',
      routerUrl: AppRoutePath.Courses,
    }, {
      titleTranslationKey: 'BREADCRUMBS.NEW_COURSE',
    } ],
    [AppRoutePath.Edit]: [ {
      titleTranslationKey: 'BREADCRUMBS.COURSES',
      routerUrl: AppRoutePath.Courses,
    } ],
    [AppRoutePath.Courses]: [ {
      titleTranslationKey: 'BREADCRUMBS.COURSES',
      routerUrl: AppRoutePath.Courses,
    } ],
  }[routePath]
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, TRANSLATIONS_PATH, TRANSLATIONS_EXTENSION);
}
