import { AppRoutePath } from '@app/enums/app-route-path.enum';

export interface BreadcrumbsStep {
  title: string;
  routerUrl?: AppRoutePath;
}
