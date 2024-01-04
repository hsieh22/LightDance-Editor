import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ControlData } from "../../../models/ControlData";
import { Dancer } from "../../../models/Dancer";
import { Part } from "../../../models/Part";
import { PartControlDataArgs } from "./args/PartControlDataArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Part)
export class PartRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Dancer, {
    nullable: false
  })
  async dancer(@TypeGraphQL.Root() part: Part, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Dancer> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).part.findUnique({
      where: {
        id: part.id,
      },
    }).dancer({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ControlData], {
    nullable: false
  })
  async controlData(@TypeGraphQL.Root() part: Part, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PartControlDataArgs): Promise<ControlData[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).part.findUnique({
      where: {
        id: part.id,
      },
    }).controlData({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
