import { Inject } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Inject({
  providedIn: 'root'
})

export class CustomPaginator extends MatPaginatorIntl{
  override itemsPerPageLabel = 'Itens por página';
  override nextPageLabel = 'Próxima página';
  override previousPageLabel = 'Página anterior';
  override firstPageLabel = 'Prmeira página';
  override lastPageLabel = 'Última página';
}
