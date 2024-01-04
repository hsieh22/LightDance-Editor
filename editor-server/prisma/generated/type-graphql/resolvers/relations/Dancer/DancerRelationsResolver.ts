import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Dancer } from "../../../models/Dancer";
import { Part } from "../../../models/Part";
import { PositionData } from "../../../models/PositionData";
import { DancerPartsArgs } from "./args/DancerPartsArgs";
import { DancerPositionDataArgs } from "./args/DancerPositionDataArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Dancer)
export class DancerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Part], {
    nullable: false
  })
  async parts(@TypeGraphQL.Root() dancer: Dancer, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DancerPartsArgs): Promise<Part[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).dancer.findUnique({
      where: {
        id: dancer.id,
      },
    }).parts({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PositionData], {
    nullable: false
  })
  async positionData(@TypeGraphQL.Root() dancer: Dancer, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DancerPositionDataArgs): Promise<PositionData[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).dancer.findUnique({
      where: {
        id: dancer.id,
      },
    }).positionData({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
