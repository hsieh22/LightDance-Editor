import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EditingLEDEffect } from "../../../models/EditingLEDEffect";
import { LEDEffect } from "../../../models/LEDEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => LEDEffect)
export class LEDEffectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => EditingLEDEffect, {
    nullable: true
  })
  async editing(@TypeGraphQL.Root() lEDEffect: LEDEffect, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<EditingLEDEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lEDEffect.findUnique({
      where: {
        id: lEDEffect.id,
      },
    }).editing({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
