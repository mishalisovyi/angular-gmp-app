import { AppRoutePath } from '@app/enums/app-route-path.enum';

export interface BreadcrumbsStep {
  titleTranslationKey: string;
  routerUrl?: AppRoutePath;
}
