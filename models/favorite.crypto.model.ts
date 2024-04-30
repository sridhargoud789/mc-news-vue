import { FavoritesCryptoModelInterface } from "~/interfaces/favorite.cryptos.model.interface";


export class FavoriteCryptoModel {
  public id: string;
  public cgId?: string;
  public cgSymbol?: string;
  public cgName?: string;

  constructor({
    id,
    cgId,
    cgSymbol,
    cgName,
  }: FavoritesCryptoModelInterface){
    this.id = id;
    this.cgId = cgId;
    this.cgSymbol = cgSymbol;
    this.cgName = cgName;
  }
}

