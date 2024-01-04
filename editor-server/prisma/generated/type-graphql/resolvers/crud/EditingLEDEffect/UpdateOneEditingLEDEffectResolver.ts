import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneEditingLEDEffectArgs } from "./args/UpdateOneEditingLEDEffectArgs";
import { EditingLEDEffect } from "../../../models/EditingLEDEffect";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => EditingLEDEffect)
export class UpdateOneEditingLEDEffectResolver {
  @TypeGraphQL.Mutation(_returns => EditingLEDEffect, {
    nullable: true
  })
  async updateOneEditingLEDEffect(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneEditingLEDEffectArgs): Promise<EditingLEDEffect | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).editingLEDEffect.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
