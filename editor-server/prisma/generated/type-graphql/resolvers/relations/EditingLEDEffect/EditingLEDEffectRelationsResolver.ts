import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { EditingLEDEffect } from "../../../models/EditingLEDEffect";
import { LEDEffect } from "../../../models/LEDEffect";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EditingLEDEffect)
export class EditingLEDEffectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() editingLEDEffect: EditingLEDEffect, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).editingLEDEffect.findUnique({
      where: {
        userId: editingLEDEffect.userId,
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => LEDEffect, {
    nullable: true
  })
  async editingLEDEffect(@TypeGraphQL.Root() editingLEDEffect: EditingLEDEffect, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<LEDEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).editingLEDEffect.findUnique({
      where: {
        userId: editingLEDEffect.userId,
      },
    }).editingLEDEffect({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
