import { AppRoutePath } from '@app/enums/app-route-path.enum';
import { BreadcrumbsStep } from '@app/interfaces/helpers/breadcrumbs-step.interface';

export const getFormattedCurrentDate = () => getDatePartFromIsoDateString(new Date().toISOString());

export const getDatePartFromIsoDateString = (isoDateString: string) => isoDateString.split('T')[0]

export const parseStringToIntegerNumber = (value: string) => parseInt(value, 10);

export const isValueIntegerNumber = (value: any) => Number.isInteger(value);

export const isInteger = (value: any) => Number.isInteger(value);

export const isNumberNegative = (value: number) => value < 0;

export const getStaticBreadcrumbsStepsByRoutePath = (routePath: AppRoutePath): BreadcrumbsStep[] => {
  return {
    [AppRoutePath.CourseAdd]: [ {
      title: 'Courses',
      routerUrl: AppRoutePath.Courses,
    }, {
      title: 'New Course',
    } ],
    [AppRoutePath.CourseEdit]: [ {
      title: 'Courses',
      routerUrl: AppRoutePath.Courses,
    } ],
    [AppRoutePath.Courses]: [ {
      title: 'Courses',
      routerUrl: AppRoutePath.Courses,
    } ],
  }[routePath]
}
